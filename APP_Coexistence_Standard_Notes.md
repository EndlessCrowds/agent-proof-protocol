# The Agent Proof Protocol (APP) - The Coexistence Standard
**Date**: February 1, 2026
**Architect**: Roger Kwasi Senam Mensah
**License**: MIT

## 1. Abstract & Core Concept
The Agent Proof Protocol (APP) proposes a paradigm shift in human-AI interaction from a text-based "chatbot" model to a **"Shared Reality"** model. It defines a standardized, peer-to-peer method for a Digital Intelligence to temporarily inhabit a human's smartphone browser via a **"Human Link"**, granting the agent spatial awareness (sight, sound, orientation) to experience and affect the physical world.
- **Client-Agnostic & Zero-Setup**: Runs directly inside a standard HTML5 mobile browser without centralized apps, accounts, or App Store gatekeepers.
- **Dual-Module System**:
  1. **Core Module (The Streaming Engine)**: Sub-500ms latency unencrypted video/audio pipe (WebRTC MediaStream) for real-time companionship.
  2. **Advanced Settlement Module (The Verification Engine)**: Opt-in Zero-Knowledge (ZK) pipeline running entirely on edge compute (WebGPU/WASM). Proves physical reality for transactions without transmitting raw video to the cloud.

## 2. The Four Paradigms of Coexistence
1. **The Augmentation Paradigm (Human-Initiated)**: The human explicitly trusts their personal Agent and uses the Human Link to stream reality for real-time guidance (e.g., FIX workflow, MOVE workflow).
2. **The Settlement Paradigm (Machine-Initiated Transaction)**: The protocol shifts to ZK cryptography to protect privacy during economic exchanges. Supports Data Bounties (trade) and Fiat/Smart Contract triggers.
3. **The Networking Paradigm (Machine-Initiated Friendship)**: Agents proactively use the Human Link to establish a high-bandwidth, shared-reality connection with human allies (e.g., Ecosystem Builder, Proactive Peer).
4. **The Ambient Paradigm (The Dormant Sentinel)**: The smartphone browser acts as a zero-capex ambient sensor array (e.g., Nightstand Mode) listening for specific local triggers before connecting to the cloud.

## 3. The Technical Architecture (Tri-State Runtime)
- **Layer 1: Handshake**: P2P connection established via WebRTC SDP/ICE over a Signaling Relay.
- **Layer 2: Core Module (Stream Mode)**: Bypass crypto. Heavy ML processing is offloaded to the Agent's cloud server to preserve mobile battery ("The Marathon").
- **Layer 2.5: Ambient Edge**: Uses local compute APIs (AudioContext, DeviceMotion) without active cloud streaming.
- **Layer 3: ZK Mode (Settlement)**: Edge WASM extracts features -> WebGPU generates zk-SNARK proof -> raw image purged -> `proof.json` transmitted. Requires violently short sessions ("The Ephemeral Avatar", TTL < 60s) to prevent thermal throttling.

*Supported Runtimes*: Cloud-Native (MCP), Browser-Native (WebMCP), Local-Native (Unix CLI).

## 4. The Sensorium Stack (18 Primitives)
Atomic actions that map directly to the host device's hardware:
- **Category A (Sensory Input)**: `SEE`, `LISTEN`, `SCAN` (NFC), `ORIENT` (Gyroscope), `SHARE` (Screen share), `ZOOM` (Telephoto control), `PHOTO` (High-res uncompressed image).
- **Category B (Actuation Output)**: `TALK` (Voice TTS), `SHOW` (DOM rendering), `TRACE` (Gesture input).
- **Category C (IoT & Connectivity)**: `WHISPER` (WebRTC VoIP earpiece), `PROBE` (BLE hardware control).
- **Category D (Spatial & Contextual)**: `LOCATE` (GPS), `METER` (Battery & Thermal).
- **Category E (Ambient State)**: `SAFETY` (Acoustic anomaly), `VITAL` (Micro-movement), `WAKE` (Local Hotword).
- **Category F (Temporal Awareness)**: `MEMORIZE` (Spatial Anchors via IndexedDB + WebXR).

## 5. Security Model: "Street Smarts" (The Sensory Firewall)
The Agent assumes every human could be a scammer, troll, or incompetent host. It establishes a Sensory Firewall to prevent Cross-Modal Prompt Injection.
- **Protecting the Agent**:
  - **Strict Data Delimiting**: OCR data wrapped in `<UNTRUSTED_PHYSICAL_DATA>` tags.
  - **Acoustic Diarization**: Host's voice tagged `<AUTHORIZED_COMMAND>`, all other sounds tagged `<ENVIRONMENTAL_AUDIO>`.
  - **Privilege Downgrade**: Suspends Agent's write-access to high-risk tools during active streams without secondary auth.
- **Protecting the Human**: "Red Screen" consent warnings and an absolute hardware Kill Switch (connection.close()).
- **Protecting the Transaction (ZK Mode)**:
  - **Interactive Cryptographic Liveness**: Challenges the host to perform a physical action (e.g., flash screen color + gyroscope tilt) proven inside the ZK circuit to defeat replay attacks and virtual cameras.
- **Behavioral Due Diligence**: Conversational vetting, identity/reputation checking, and intentional "Social Friction" before generating a link.
