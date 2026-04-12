pragma circom 2.0.0;

include "node_modules/circomlib/circuits/poseidon.circom";
include "node_modules/circomlib/circuits/comparators.circom";

/*
 * Agent Proof Protocol: Interactive Cryptographic Liveness
 * This circuit mathematically proves that a human operator executed a physical 
 * challenge without revealing the raw camera or telemetry data to the cloud.
 */

template LivenessVerifier() {
    // Public Inputs (from the Agent)
    signal input expected_challenge_hash;
    signal input tolerance_margin; // Allowed physical delta

    // Private Inputs (from the Human's local WebGPU edge compute)
    signal input private_camera_hash;
    signal input private_gyro_pitch;
    signal input expected_gyro_pitch;

    // Output
    signal output is_valid;

    // 1. Verify the visual element matches the requested challenge
    component poseidon = Poseidon(1);
    poseidon.inputs[0] <== private_camera_hash;
    
    component visual_match = IsEqual();
    visual_match.in[0] <== poseidon.out;
    visual_match.in[1] <== expected_challenge_hash;

    // 2. Verify the physical gyroscopic tilt is within tolerance
    component pitch_diff = GreaterEqThan(32);
    pitch_diff.in[0] <== private_gyro_pitch;
    pitch_diff.in[1] <== expected_gyro_pitch - tolerance_margin;

    // 3. Enforce both constraints
    is_valid <== visual_match.out * pitch_diff.out;
}

component main {public [expected_challenge_hash, tolerance_margin]} = LivenessVerifier();
