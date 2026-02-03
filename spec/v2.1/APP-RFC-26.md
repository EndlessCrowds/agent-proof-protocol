# APP-RFC-26: The Agent Proof Protocol Specification
**Status:** Standards Track
**Version:** 2.1.0-alpha
**Date:** 2026-02-01
**Author:** R. Mensah

## 1. Abstract Data Models
The protocol is strictly typed. All interactions must conform to the following JSON schemas.

### 1.1 The Atom (Base Object)
The fundamental unit of the protocol is the `TaskAtom`.

```typescript
type TaskAtom = {
  id: string;                 // UUID v4
  version: "2.1";             // Protocol Version
  timestamp: number;          // Unix Epoch (UTC)
  agent_id: string;           // DID (e.g., did:eth:0x...)
  signature: string;          // Cryptographic signature of the payload
  payload: TaskPayload;       // The Intent
}
```

### 1.2 The Primitives (The OpCodes)
The protocol recognizes exactly five atomic operations. Any complex workflow must be decomposed into these primitives.

```typescript
enum Primitive {
  VERIFY   = "OP_01", // Read State (Sensors/Photo)
  FIX      = "OP_02", // Write State (Unskilled Manipulation)
  MAINTAIN = "OP_03", // Write State (Skilled/Licensed Manipulation)
  MOVE     = "OP_04", // Transport State (Logistics)
  THINK    = "OP_05"  // Compute State (Human Intelligence)
}
```

### 1.3 The Payload Schema
This defines the "What" and "Where" of the request.

```typescript
interface TaskPayload {
  opcode: Primitive;
  subtype: string;            // e.g., "PLUMBING", "LAST_MILE", "RLHF"
  
  // Spatial Constraints
  location: {
    lat: number;
    lng: number;
    radius_meters: number;    // Geofence strictness
    floor?: number;           // Verticality (Z-axis) for RTT
  };

  // Temporal Constraints
  execution_window: {
    start: number;            // Not before
    end: number;              // Expire after
  };

  // Verification Requirements (The "Proof")
  proof_requirements: {
    rtt_check: boolean;       // Require Wi-Fi RTT PoL?
    media_count: number;      // Number of photos/videos required
    witness_count: number;    // Minimum number of peers/devices to attest
  };

  // Settlement (The "Reward")
  bounty: {
    amount: number;
    asset: "SAT" | "USDC" | "USD";
    rail: "L402" | "VISA_TAP" | "ON_CHAIN";
  };
}
```

## 2. The State Machine
The protocol enforces a unidirectional state flow for every TaskAtom.

| State | Hex Code | Description | Trigger |
| :--- | :--- | :--- | :--- |
| **INIT** | 0x00 | Task created by Agent, signed, but not broadcast. | Agent.sign() |
| **OPEN** | 0x01 | Broadcast to Mempool. Solvers (Workers/APIs) can bid. | Network.broadcast() |
| **LOCKED** | 0x02 | Worker selected. Funds escrowed/authorized. | Contract.lock() |
| **PROVING** | 0x03 | Worker is on-site. RTT Handshake active. | Worker.checkIn() |
| **VERIFYING** | 0x04 | Proofs submitted. Oracles/Agents validating data. | Worker.submit() |
| **SETTLED** | 0x05 | Success. Funds released to Worker. | Agent.finalize() |
| **FAILED** | 0xFF | Timeout, Proof Failure, or Dispute. Funds returned. | Timeout or Dispute |

## 3. Interface Definition (API)
The protocol defines standard endpoints that any conforming node (Gateway) must expose.

### 3.1 POST /v1/broadcast
*   **Input:** TaskAtom (Signed JSON)
*   **Behavior:**
    *   Validates Schema.
    *   Checks agent_id reputation (ERC-8004 Registry).
    *   Validates Payment Channel capacity (Solvency Check).
    *   Routes to Aggregators (TaskRabbit/Uber/Native) based on opcode.
*   **Output:** 200 OK `{ "tx_hash": "0x..." }`

### 3.2 GET /v1/proof/challenge
*   **Context:** Used by the Worker Client during the PROVING state.
*   **Input:**

```json
{
  "task_id": "uuid",
  "worker_did": "did:pkh:..."
}
```

*   **Output:** (Cryptographic Challenge)

```json
{
  "nonce": "293847293847",
  "rtt_anchors": ["bssid_1", "bssid_2"], 
  "timestamp": 1782349100
}
```

### 3.3 POST /v1/proof/submit
*   **Context:** Worker submits the solution to the physical challenge.
*   **Input:**

```json
{
  "task_id": "uuid",
  "proof_data": {
    "rtt_signature": "sig_of_rtt_measurements",
    "media_hash": "ipfs_hash_of_photo",
    "exif_metadata": { ... }
  }
}
```

*   **Behavior:** Triggers the Agent to validate proofs and release funds via L402.

## 4. Hardware/Sensor Integration Standards
To satisfy `proof_requirements.rtt_check: true`, the physical layer must conform to:

### 4.1 The RTT Handshake Protocol
*   **Initiation:** Worker Device sends 802.11mc FTM_REQUEST.
*   **Response:** Anchor (IoT/Router) responds with FTM_RESPONSE containing $t1, t4$.
*   **Calculation:** Device calculates RTT = $(t4 - t1) - (t3 - t2)$.
*   **Attestation:** Device signs the raw RTT data inside the TEE (Trusted Execution Environment/Secure Enclave). Raw GPS data is rejected.

## 5. Settlement Headers (x402)
Standard HTTP headers for the payment negotiation.

**Request (Agent -> Protocol):**
`Authorization: L402 <token_macaroon>:<preimage>`

**Response (Protocol -> Agent - If Unpaid):**
`402 Payment Required`
`WWW-Authenticate: L402 macaroon="...", invoice="lnbc1..."`

## 6. Error Codes

| Code | Error Name | Meaning |
| :--- | :--- | :--- |
| **ERR_101** | INVALID_SIG | Agent signature does not match payload. |
| **ERR_204** | NO_LIQUIDITY | No workers found in geofence/price range. |
| **ERR_301** | RTT_FAIL | Worker failed Wi-Fi RTT proximity check (>5m variance). |
| **ERR_302** | LIVENESS_FAIL | Bio-liveness check failed (preventing bots). |
| **ERR_402** | INSUFFICIENT_FUNDS | Agent wallet drained or channel closed. |

## 7. Implementation: The Universal Translator Logic
Pseudo-code for the core routing logic inside the APP Node.

```python
def route_task(task: TaskAtom):
    # 1. Inspect Primitive
    if task.payload.opcode == "VERIFY":
        # Prefer Native Swarm (High Trust / Low Cost)
        return broadcast_p2p(task)
    
    elif task.payload.opcode == "MOVE":
        # Check Native Liquidity first
        if native_drivers_available(task.location):
            return broadcast_p2p(task)
        else:
            # Fallback to Aggregator Bridge
            return adapter_uber.dispatch(task)

    elif task.payload.opcode == "MAINTAIN":
        # Strict Credential Check
        if not task.constraints.license_required:
             return error("MAINTAIN requires license constraint")
        
        # Route to Enterprise API
        return adapter_field_nation.post_ticket(task)
```

## Copyright
Copyright and related rights waived via CC0.
