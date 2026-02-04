# Agent Proof Protocol (APP) Integration Guide

## Introduction
The Agent Proof Protocol (APP) acts as a middleware layer for the Agentic Economy. It bridges digital intent with physical certainty, providing a standardized "Proof of Physics" layer that agents can use to verify real-world task completion.

## Step 1: Ingress
To initiate a verification request, format a JSON payload based on the `ingress_mandate.json` schema and send it to the APP Gateway. 

Key properties:
- `origin_rail`: Specify if the request originates from `visa_tap`, `google_ap2`, or `erc_8004`.
- `payment_commitment`: Details about the escrowed funds.
- `physical_requirements`: Geofencing data (latitude, longitude, and radius).

## Step 2: Challenge
Once the mandate is accepted, APP geofences the request and pushes a challenge to human "Sensors" in the local area. The sensor must provide cryptographic proof (Wi-Fi RTT/Bio-Liveness) to verify their presence and identity.

## Step 3: Settlement
Upon successful verification, APP returns a `settlement_token.json` payload to your provided `webhook_url`. This token contains the `verifier_signature` and `proof_metadata` required to unlock the escrowed funds on your originating payment rail.

## Supported Rails
APP currently supports the following translation gateways:
- **Visa TAP**: Fiat currency settlement via NFC/Contextual mandates.
- **ERC-8004**: Decentralized Web3 payment rails and cryptographic intent mandates.
- **Google AP2**: Contextual intent-based authorization.

## Supported Execution Networks

APP v2.1 aggregates 40+ global execution APIs. Below is the comprehensive list of supported adapters, categorized by primitive.

### 1. PRIMITIVE: MOVE (Logistics & Atoms)
Strategic Value: Physical transport of goods and assets.

*   **Uber Direct** (`@app/adapter-move-uber`)
    *   *Region:* Global
    *   *Strategic Value:* White Label Dispatch. Best for instant urban courier services.
*   **DoorDash Drive** (`@app/adapter-move-doordash`)
    *   *Region:* North America
    *   *Strategic Value:* Drive API. Optimized for last-mile retail and food delivery.
*   **Stuart (DPD Group)** (`@app/adapter-move-stuart`)
    *   *Region:* Europe/UK
    *   *Strategic Value:* Urban High-Density Logistics.
*   **GrabExpress** (`@app/adapter-move-grab`)
    *   *Region:* SE Asia
    *   *Strategic Value:* Dominant super-app logistics in Southeast Asia.
*   **Lalamove** (`@app/adapter-move-lalamove`)
    *   *Region:* Asia/LatAm
    *   *Strategic Value:* On-Demand delivery for diverse vehicle types.
*   **Rappi** (`@app/adapter-move-rappi`)
    *   *Region:* LatAm
    *   *Strategic Value:* Store OS. Deep integration with Latin American retail.
*   **Borzo** (`@app/adapter-move-borzo`)
    *   *Region:* India/Global
    *   *Strategic Value:* Cost-effective courier intra-city courier service.
*   **Roadie** (`@app/adapter-move-roadie`)
    *   *Region:* US
    *   *Strategic Value:* Freight/Bulky. Peer-to-peer delivery for large items.
*   **Gokada** (`@app/adapter-move-gokada`)
    *   *Region:* Nigeria
    *   *Strategic Value:* Lagos Geo-Logistics. Specialized motorbike logistics.
*   **MAX.ng** (`@app/adapter-move-maxng`)
    *   *Region:* Nigeria
    *   *Strategic Value:* EV Logistics. Sustainable transport in Africa.

### 2. PRIMITIVE: FIX (Consumer & Skilled Labor)
Strategic Value: On-demand manual labor and home services.

*   **TaskRabbit** (`@app/adapter-fix-taskrabbit`)
    *   *Region:* Global
    *   *Strategic Value:* IKEA Partner API. General handyman and assembly tasks.
*   **Urban Company** (`@app/adapter-fix-urbancompany`)
    *   *Region:* India/UAE
    *   *Strategic Value:* Managed Pro Services. High-quality vetted home services.
*   **Thumbtack** (`@app/adapter-fix-thumbtack`)
    *   *Region:* North America
    *   *Strategic Value:* Lead Gen API. Connecting with local professionals.
*   **Airtasker** (`@app/adapter-fix-airtasker`)
    *   *Region:* Australia/UK
    *   *Strategic Value:* GraphQL Spot Tasks. Flexible marketplace for any task.
*   **SweepSouth** (`@app/adapter-fix-sweepsouth`)
    *   *Region:* Africa
    *   *Strategic Value:* Home Services. Domestic cleaning and maintenance.
*   **Roamler** (`@app/adapter-fix-roamler`)
    *   *Region:* Europe
    *   *Strategic Value:* Retail Audits. Crowdsourced in-store checks and executing.

### 3. PRIMITIVE: MAINTAIN (Enterprise Infrastructure)
Strategic Value: Licensed trade work and enterprise facility management.

*   **Field Nation** (`@app/adapter-maintain-fieldnation`)
    *   *Region:* US
    *   *Strategic Value:* IT/Cabling Work Orders. Technical field services.
*   **WorkMarket** (`@app/adapter-maintain-workmarket`)
    *   *Region:* Global
    *   *Strategic Value:* ADP Compliance Cloud. Enterprise freelancer management.
*   **ServiceChannel** (`@app/adapter-maintain-servicechannel`)
    *   *Region:* Global
    *   *Strategic Value:* Facility Mgmt. Commercial maintenance automation.

### 4. PRIMITIVE: THINK (Cognitive & RLHF)
Strategic Value: human-in-the-loop processing and consensus.

*   **Scale AI** (`@app/adapter-think-scale`)
    *   *Region:* Global
    *   *Strategic Value:* RLHF & Labeling. High-quality AI training data.
*   **Amazon MTurk** (`@app/adapter-think-mturk`)
    *   *Region:* Global
    *   *Strategic Value:* Consensus Tasks. Micro-tasking for quick human validation.
*   **Toloka** (`@app/adapter-think-toloka`)
    *   *Region:* Global
    *   *Strategic Value:* High Volume Python SDK. Scalable data labeling.

### 5. SETTLEMENT RAILS (Fiat & Crypto)
Strategic Value: Financial settlement and cross-border payments.

*   **Payman AI** (`@app/rail-payman`)
    *   *Type:* AI-Native
    *   *Strategic Value:* Agent Banking. Banking infrastructure for AI agents.
*   **Skyfire** (`@app/rail-skyfire`)
    *   *Type:* Stablecoin
    *   *Strategic Value:* USDC Agent Spend. Protocol-native spending.
*   **Stripe Connect** (`@app/rail-stripe`)
    *   *Type:* Global Fiat
    *   *Strategic Value:* Splits & Payouts. Compliant global fiat transfers.
*   **Wise Platform** (`@app/rail-wise`)
    *   *Type:* Cross-Border
    *   *Strategic Value:* Forex. Low-cost currency exchange.
*   **Yellow Card** (`@app/rail-yellowcard`)
    *   *Type:* Africa
    *   *Strategic Value:* Stablecoin Rails. Crypto on/off ramps for Africa.
*   **Strike API** (`@app/rail-strike`)
    *   *Type:* Lightning
    *   *Strategic Value:* Bitcoin. Instant micropayments.

### 6. VERIFICATION (DePIN)
Strategic Value: Cryptographic proof of physical reality.

*   **Witness Chain** (`@app/verify-witness-chain`)
    *   *Type:* Location
    *   *Strategic Value:* Proof of Location. Verified geospatial data.
*   **World ID** (`@app/verify-world-id`)
    *   *Type:* Identity
    *   *Strategic Value:* Proof of Humanity. Sybil resistance for agents.
*   **Android Wi-Fi RTT** (`@app/verify-wifi-rtt`)
    *   *Type:* Physics
    *   *Strategic Value:* IEEE 802.11mc. Protocol-native time-of-flight measurements.
