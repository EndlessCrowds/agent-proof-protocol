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
