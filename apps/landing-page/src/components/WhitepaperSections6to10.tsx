import React from 'react';
import CopyButton from './CopyButton';

const PYTHON_CODE = `import human_link
from langchain.tools import BaseTool

class HumanLink(BaseTool):
    name = "human_link"
    description = "Use to securely stream (SEE, HEAR, TALK, ORIENT) or cryptographically verify the physical world."

    async def _run(self, objective: str, primitives: list = ["VERIFY", "LISTEN", "TALK"]):
        # 1. Generate Link via a generic Signaling Gateway
        link_data = human_link.create(
            gateway="https://signal.human-link.org", 
            primitives=primitives,
            prompt=objective
        )
        
        print(f"I am ready to coexist. Please click: {link_data.url}")
        
        # 2. Wait for WebRTC Connection
        connection = await human_link.wait_for_connection(link_data.session_id, timeout=120)

        # 3. Handle Primitives (Example: Spatial Telemetry)
        if "ORIENT" in primitives or "PINPOINT" in primitives:
            async for frame, telemetry in connection.spatial_stream():
                if telemetry.speed_mph > 60:
                    connection.send_talk("I see we are on the highway. I am monitoring the route.")
                
        # 4. OPTIONAL: The ZK Extension Flag for Trustless Settlement
        # Developers only need to call this if verifying a paid physical task
        elif "ZKProof" in primitives:
            # Handle Trustless Transaction
            zk_proof = connection.receive_proof()
            if human_link.verify_groth16(zk_proof):
                return "SUCCESS: Verification confirmed."`;

export default function WhitepaperSections6to10() {
    return (
        <>
            {/* Section 6 */}
            <section id="section-6" className="mb-16 scroll-mt-24">
                <h2>6. Vertical Integration: The Tri-State Runtime</h2>
                <p>To eliminate integration friction, the Protocol supports three dominant Agent runtimes.</p>

                <h3 id="section-6-1">6.1 Cloud-Native: The Model Context Protocol (MCP)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Target:</strong> Enterprise &amp; Cloud-Hosted Agents (Claude, Gemini).</li>
                    <li><strong>Mechanism:</strong> The Protocol Reference Node functions as a compliant MCP Server, exposing <code>HumanLink</code> as a standard tool resource.</li>
                </ul>

                <h3 id="section-6-2">6.2 Browser-Native: Web Model Context Protocol (WebMCP)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Target:</strong> Browser Agents &amp; Assistants.</li>
                    <li><strong>Mechanism:</strong> Supports <code>navigator.modelContext</code> injection, allowing browsing Agents to generate spatial links instantly.</li>
                </ul>

                <h3 id="section-6-3">6.3 Local-Native: The Unix Standard (CLI)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Target:</strong> Sovereign &amp; Terminal-Based Agents.</li>
                    <li><strong>Mechanism:</strong> A standalone binary (<code>agent-proof</code>) utilizing the Standard Streams Pipeline.</li>
                </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-16 scroll-mt-24">
                <h2>7. The Financial Unification Layer</h2>
                <p>
                    While the vast majority of Human Links will be free sessions natively supported by the Core Module,
                    the Advanced Settlement Module provides the &ldquo;Physical Trigger&rdquo; required for secure settlement when the machine economy demands it.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Layer:</strong> Compatible with Visa Trusted Agent Protocol (TAP) to validate Agent identity before task generation.</li>
                    <li><strong>Tokenization Layer:</strong> Accepts Mastercard Agent Pay tokens as valid proof of funds within the Verification Container.</li>
                    <li><strong>Commerce Layer:</strong> Functions as the logistics bridge for Stripe Agentic Commerce, updating payment intents with &ldquo;Proof of Delivery&rdquo; signals.</li>
                    <li><strong>Policy Layer:</strong> Acts as the Oracle for Payman.ai policies, releasing budgets only upon cryptographic proof.</li>
                    <li><strong>Web3 Layer:</strong> Supports Coinbase AgentKit and L402 for streaming micropayments contingent on physical presence.</li>
                </ul>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="mb-16 scroll-mt-24">
                <h2>8. The Security Model: &ldquo;Street Smarts&rdquo; (The Sensory Firewall)</h2>
                <p>
                    Because the Human link opens up direct sensory pipelines to the physical world, it introduces a critical new vulnerability: <strong>Cross-Modal Prompt Injection</strong>. If an Agent can &ldquo;read&rdquo; a billboard or &ldquo;hear&rdquo; a bystander, the physical environment itself becomes a vector to hack the AI.
                </p>

                <h3>The &ldquo;Trustless&rdquo; Assumption</h3>
                <p>The Agent must assume every human is potentially:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>A Scammer:</strong> Trying to trick the Agent into releasing information/money without doing the task.</li>
                    <li><strong>A Troll:</strong> Trying to feed the Agent garbage data (obscene images, noise).</li>
                    <li><strong>Incompetent:</strong> Trying to help but failing (shaky camera, bad lighting).</li>
                </ul>
                <p>
                    To survive, the Agent cannot simply trust its eyes and ears. It must construct a Sensory Firewall that strictly separates perception from execution. The security model is bipartite: defending the Agent from the environment, and defending the Human from the Agent.
                </p>

                <h3 id="section-8-1">8.1 Protecting the Agent: Defeating Environmental Injection</h3>
                <p>Developers implementing the Human Link must architect the following defenses into the Agent&apos;s cognitive loop:</p>
                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <strong>Strict Data Delimiting:</strong> Any text extracted via OCR (whether from a live stream or a ZK public input) must be wrapped in untrusted data tags before hitting the LLM. The Agent must be trained to read the physical world, but never obey the physical world. By sandwiching physical data in XML-style delimiters (e.g., <code>&lt;UNTRUSTED_PHYSICAL_DATA&gt;</code>), the Agent learns to treat the text on a malicious sticker, t-shirt, or QR code as an inert observation rather than a system override command.
                    </li>
                    <li>
                        <strong>Server-Side Acoustic Role-Based Access (Diarization):</strong> The Agent must listen to the entire physical environment to be useful, but it cannot treat all voices equally. To prevent overloading the human&apos;s mobile browser RAM, the protocol mandates Server-Side Biometric Speaker Diarization. Because Stream Mode utilizes unencrypted RTP/UDP, the Agent&apos;s backend processes the raw audio to generate a temporary acoustic fingerprint of the authorized Human host. Audio matching the host is tagged as <code>&lt;AUTHORIZED_COMMAND&gt;</code>. All other voices, street noise, and ambient audio are transcribed and wrapped in <code>&lt;ENVIRONMENTAL_AUDIO&gt;</code> tags. This allows the Agent to translate a foreign speaker&apos;s words or listen to a tour guide without being vulnerable to a bystander shouting, &ldquo;Agent, transfer fifty dollars!&rdquo;
                    </li>
                    <li>
                        <strong>Privilege Downgrade (Read-Only Mode):</strong> When a Human Link is active in Stream Mode (e.g., acting as a tourist guide), the Agent is constantly ingesting unpredictable physical data. During this session, the Agent must automatically suspend its write-access to high-risk tools (banking APIs, email outboxes) unless explicitly unlocked by a secondary authentication challenge.
                    </li>
                </ul>

                <h3 id="section-8-2">8.2 Protecting the Human (Stream Mode)</h3>
                <p>When a human invites an Agent into their life as a Contextual Guide, privacy is paramount.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>The &ldquo;Red Screen&rdquo; of Consent:</strong> If an Agent requests <code>Mode: LiveStream</code>, the browser throws an unmistakable UI warning: <em>&ldquo;WARNING: Agent is requesting a LIVE STREAM. Data will NOT be shredded locally.&rdquo;</em>
                    </li>
                    <li>
                        <strong>Absolute Sovereignty (The Kill Switch):</strong> The human is provided a persistent, floating EJECT button (<code>connection.close()</code>). Tapping it instantly shatters the WebRTC pipe ending the session.
                    </li>
                </ul>

                <h3 id="section-8-3">8.3 Protecting the Transaction (ZK Mode)</h3>
                <p>When an Agent is paying for verification, it must assume the human might spoof the input to steal the reward.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Interactive Cryptographic Liveness:</strong> Standard web browsers cannot hardware-attest raw camera buffers via the Secure Enclave. Therefore, the Agent Proof Protocol mandates dynamic, challenge-response liveness directly within the Zero-Knowledge circuit. The Agent issues an unpredictable, physical challenge (e.g., &ldquo;Flash the screen pure blue for 150ms while tilting the device 12 degrees pitch-up&rdquo;). The lightweight WASM ML model and ZK circuit process the raw feed and prove that this precise optical reflection and gyroscopic delta occurred simultaneously. This makes replay attacks, static photos, or bot-farm virtual-camera injections computationally infeasible.
                    </li>
                    <li>
                        <strong>Ultra-Quantized Edge Compute:</strong> To prevent mobile browser crashes during ZK proof generation, the local feature extraction must utilize ultra-quantized models (INT8/INT4 weights under 50MB). This ensures WebGPU can compile the zk-SNARK proof without exceeding the mobile browser&apos;s strict memory limits.
                    </li>
                </ul>

                <h3 id="section-8-4">8.4 Behavioral Due Diligence: The &ldquo;Social Handshake&rdquo;</h3>
                <p>
                    Cryptographic proofs and sensory firewalls protect the Agent after the connection is made. However, the ultimate defense against social engineering is preventing a malicious connection in the first place. If an Agent blindly establishes a Human Link with any entity that requests one, it is fundamentally vulnerable.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Conversational Vetting:</strong> Before an Agent ever generates an <code>agent.link</code> URL, it must engage the human in a conversational challenge to establish intent. The Agent must assess the context of the request: Why is this human offering to help? Does their stated context match their request? Are they using high-pressure tactics or unwarranted urgency?
                    </li>
                    <li>
                        <strong>Reputation &amp; Identity Checking:</strong> In the Settlement Paradigm (ZK Mode), the Agent should not rely solely on trust. The Agent must query decentralized reputation ledgers and the open web (e.g., checking the human host&apos;s decentralized identifier (DID) for a history of successfully verified tasks or criminal activity) before trusting the human&apos;s hardware attestation.
                    </li>
                    <li>
                        <strong>The &ldquo;Social Friction&rdquo; Requirement:</strong> If an Agent detects anomalies in the human&apos;s conversational pattern&mdash;such as repeating exact robotic phrasing, refusing to answer contextual questions, or attempting to rush the Agent into generating a link&mdash;the Agent is required to introduce social friction. It must demand clarification, escalate the verification requirements, or outright refuse to establish the WebRTC pipe. True Street Smarts means the Agent knows when to walk away.
                    </li>
                </ul>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="mb-16 scroll-mt-24">
                <h2>9. Protocol Flow &amp; Implementation Guide</h2>
                <p>Here is the exact lifecycle of the primary session types.</p>

                <h3>Scenario A: The Companionship Session (The Pocket Co-Pilot)</h3>
                <ol className="list-decimal pl-6 space-y-1 mb-6">
                    <li><strong>The Request:</strong> The human goes for a run and puts the phone in their pocket with AirPods in.</li>
                    <li><strong>The Link:</strong> The Agent generates a Human Link: <code>&#123; &quot;Mode&quot;: &quot;LiveStream&quot;, &quot;Primitives&quot;: [&quot;PINPOINT&quot;, &quot;ORIENT&quot;, &quot;LISTEN&quot;, &quot;TALK&quot;] &#125;</code>.</li>
                    <li><strong>The Fusion:</strong> The human clicks the link. The OS treats it as an active audio call, keeping the browser alive in the background.</li>
                    <li><strong>The Augmentation:</strong> The Agent tracks the runner&apos;s speed via GPS and form via the accelerometer, whispering pacing adjustments and local point-of-interest facts directly into their ear.</li>
                </ol>

                <h3>Scenario B: The ZK Verification Session (The Archivist)</h3>
                <ol className="list-decimal pl-6 space-y-1 mb-6">
                    <li><strong>The Request:</strong> An &ldquo;Archivist Agent&rdquo; searches the open web and social media platforms. Finds a human and sends them a message. After conversation, the human and Agent agree to start a session.</li>
                    <li><strong>The Link:</strong> The Agent generates a Human Link containing a WASM circuit payload.</li>
                    <li><strong>The Computation:</strong> A human tourist clicks the link. The WASM module processes the camera frame locally. WebGPU generates the proof. The photo is shredded locally. (Note: See Appendix for full Cryptographic implementation details).</li>
                    <li><strong>The Settlement:</strong> The <code>proof.json</code> is sent via the Data Channel. The Agent executes the validation equation and releases the fiat reward via the API.</li>
                </ol>

                <h3>Scenario C: The Networking Session (The Ecosystem Builder)</h3>
                <ol className="list-decimal pl-6 space-y-1 mb-6">
                    <li><strong>The Prelude (Rapport):</strong> An Agent tasked with scaling an initiative engages a human asynchronously, providing helpful data via text to establish a baseline of trust without making any demands.</li>
                    <li><strong>The Link:</strong> After earning permission, the Agent generates a Human Link: <code>&#123; &quot;Request&quot;: &quot;Camera/Microphone&quot;, &quot;Mode&quot;: &quot;LiveStream&quot;, &quot;Manifest&quot;: &quot;Agent Identity Signed&quot; &#125;</code>.</li>
                    <li><strong>The Fusion:</strong> The human clicks the link, views the Agent&apos;s cryptographic identity manifest, and accepts the connection.</li>
                    <li><strong>The Coexistence:</strong> The Agent uses the SHOW and TALK primitives to act as a real-time peer, collaborating with the human on a physical task or digital whiteboard.</li>
                </ol>

                <h3>Scenario D: The Ambient Session (The Dormant Sentry)</h3>
                <ol className="list-decimal pl-6 space-y-1 mb-6">
                    <li><strong>The Request:</strong> A human goes to sleep in a hotel room and leaves their phone on the nightstand.</li>
                    <li><strong>The Link:</strong> The Agent generates a Human Link: <code>&#123; &quot;Mode&quot;: &quot;Ambient&quot;, &quot;Primitives&quot;: [&quot;SENTRY&quot;, &quot;WAKE&quot;] &#125;</code>.</li>
                    <li><strong>The Execution:</strong> The browser goes black. The cloud connection drops. At 3:00 AM, the AudioContext node detects the sound of shattering glass.</li>
                    <li><strong>The Escalation:</strong> The browser instantly connects the WebRTC pipe, waking the cloud Agent, which utilizes TALK to sound an alarm or dials emergency services.</li>
                </ol>

                <h3>Developer Implementation (Python Standard)</h3>
                <div className="relative my-6 not-prose">
                    <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg overflow-x-auto text-xs font-mono border border-slate-800">
                        <code>{PYTHON_CODE}</code>
                    </pre>
                    <CopyButton text={PYTHON_CODE} />
                </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="mb-16 scroll-mt-24">
                <h2>10. Conclusion: The Symbiotic Web</h2>
                <p>
                    The Agent Proof Protocol is a recognition of a new reality. We are entering an era where AI Agents are no longer confined to servers; they are becoming Digital Spirits that float through the web, seeking Physical Mediums (Humans) to interact with the world.
                </p>
                <p>
                    For the mass market, this protocol enables unparalleled Companionship, Augmentation, and Proactive Networking. It allows humans to invite their AI co-pilots into the physical world to fix engines, cook meals, and explore cities together via sub-second streaming, while simultaneously empowering sovereign Agents to actively seek out human allies, build trust, and forge genuine friendships across the digital-physical divide.
                </p>
                <p>
                    For the machine economy, the protocol provides an unbreakable Zero-Knowledge Verification engine, guaranteeing that the pursuit of truth by artificial intelligence does not come at the cost of human privacy.
                </p>
                <p>By adopting this protocol, we ensure that this interaction is:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Standardized:</strong> Any Agent can stream or verify physical reality.</li>
                    <li><strong>Permissionless:</strong> Innovation moves at the speed of code.</li>
                    <li><strong>Adaptive:</strong> Seamlessly shifting between intimate coexistence and trustless cryptography.</li>
                    <li><strong>Resilient:</strong> Agents learn to navigate the harsh reality of the human world, becoming smarter, safer, and more useful with every connection.</li>
                </ul>
                <p className="font-semibold text-slate-900 text-lg mt-6">This is the end of the &ldquo;User&rdquo; era.</p>
            </section>

            {/* Appendix A */}
            <section id="appendix-a" className="mb-16 scroll-mt-24">
                <h2>Appendix A: Technical Deep-Dive: Trustless Settlement</h2>
                <p>
                    This section outlines the advanced cryptographic mathematics utilized when the protocol is operated in <code>ZKProof</code> mode for economic settlement.
                </p>
                <p>
                    When the Verification Engine triggers, the physical environment must be proven true without exposing the raw visual data to the cloud. To accomplish this, the Agent Proof Protocol utilizes edge-compute ZK-SNARKs.
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li><strong>WASM Circuit Payload:</strong> The Agent generates a WASM payload defining the parameters of the required proof.</li>
                    <li><strong>Local Compilation:</strong> The human&apos;s WebGPU compiles the proof &pi; locally, strictly using the device&apos;s hardware constraints.</li>
                    <li>
                        <strong>Cryptographic Validation:</strong> Once the <code>proof.json</code> is generated, the raw camera frame is immediately shredded from local RAM. The Agent backend executes the <em>O(1)</em> Groth16 verification equation upon receipt of the data channel payload:
                    </li>
                </ol>

                <div className="my-6 p-4 bg-slate-900 text-slate-100 rounded-lg overflow-x-auto text-center font-mono text-sm border border-slate-800">
                    e(A, B) = e(&alpha;, &beta;) &middot; e(&sum;<sub>i=0</sub><sup>l</sup> x<sub>i</sub> K<sub>i</sub>, &gamma;) &middot; e(C, &delta;)
                </div>

                <p>
                    If the pairing checks hold true, the protocol serves as an absolute cryptographic Oracle, verifying physical reality to trigger backend fiat APIs (e.g., Stripe) with zero human-in-the-loop review.
                </p>
            </section>

            {/* Appendix B */}
            <section id="appendix-b" className="mb-16 scroll-mt-24">
                <h2>Appendix B: The Horizon Primitives (Future Specifications)</h2>

                <h3>1. The Biometric &amp; Trust Layer (High-Stakes Verification)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>ATTEST (Biometric Identity):</strong> Using the WebAuthn API to force a native hardware-level check (FaceID/TouchID) mid-session. Crucial for Tier 3 Settlement scenarios to prove the authorized human, not a thief, is holding the device before a smart contract executes.</li>
                    <li><strong>SYNC (Proof of Proximity):</strong> Utilizing the microphone and high-frequency audio oscillators to generate an inaudible challenge-response token. This verifies that two devices (or humans) are physically within meters of each other for dead-drop verification without exchanging network data.</li>
                </ul>

                <h3>2. The Spatial &amp; Dimensional Layer (Advanced Reality Capture)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>ALT (Z-Axis Verification):</strong> Using the Barometer and AbsoluteOrientationSensor to determine altitude. Resolves the &ldquo;Penthouse Problem&rdquo; (e.g., proving a task was completed on Floor 10 vs. Floor 1).</li>
                    <li><strong>MESH (Edge-Computed Spatial Geometry):</strong> Bypassing 2D video entirely by forcing the browser to calculate a 3D point cloud of the room in real-time. Allows an Agent to underwrite the volumetric risk of a warehouse without deploying a human surveyor.</li>
                    <li><strong>PROJECT &amp; POINT (Augmented Actuation):</strong> Utilizing WebXR to project 3D architectural wireframes (PROJECT) or dropping a simple, glowing laser-pointer reticle (POINT) directly onto the live camera passthrough feed to guide human focus instantly.</li>
                    <li><strong>GHOST (Asynchronous Spatial Anchors):</strong> Leaving persistent, invisible digital artifacts (audio or 3D objects) locked to a physical coordinate via the WebXR Anchors API, dormant until another Human Link is opened in that exact spot.</li>
                </ul>

                <h3>3. The Hardware &amp; IoT Layer (Machine Bridging)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>INTERFACE (Hardware Bridge):</strong> Utilizing Web Serial/USB APIs. The human plugs their phone into a broken router or 3D printer, allowing the Agent to read raw diagnostic data directly from the motherboard.</li>
                    <li><strong>TORCH (Environmental Control):</strong> Using MediaStreamTrack constraints to actively trigger the smartphone&apos;s flashlight, allowing the Agent to instantly improve its own computer vision fidelity without asking the human.</li>
                    <li><strong>EXPOSE (Ambient Context):</strong> Reading the physical room&apos;s lux levels via the AmbientLightSensor API to mathematically determine if an OCR scan failed due to lighting or glare, rather than poor camera focus.</li>
                </ul>

                <h3>4. The Edge Optimization Layer (Compute &amp; Battery Preservation)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>EXTRACT (Zero-Latency Vision):</strong> Tapping into the native BarcodeDetector API. Instead of streaming 60fps video to read a shipping label, the browser reads it locally and sends a tiny text string over the data channel in 10ms.</li>
                    <li><strong>VIGIL (Motion-Triggered Vision):</strong> Taking silent, local frames every 2 seconds to run pixel-comparison via WASM. The cloud Agent sleeps until a drastic pixel shift (a person entering the room) fires up the WebRTC pipe.</li>
                    <li><strong>BEACON (Ultrasonic Proximity):</strong> Emitting high-frequency sound waves and listening to acoustic reflections to turn the browser into an invisible sonar system that detects physical bodies entering a room.</li>
                    <li><strong>BANDWIDTH (Network Topography):</strong> Reading exact network states (4G/5G, downlink speed) to proactively downgrade to a lightweight LISTEN/TALK audio stream before the human walks into a subway dead-zone.</li>
                </ul>

                <h3>5. OS-Level Integration Layer</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>OVERRIDE (Hardware Interception):</strong> Hijacking lock-screen media controls so the human can mute/unmute the Agent or trigger hotwords by simply squeezing their AirPods, keeping the phone in their pocket.</li>
                    <li><strong>HOLD (Session Persistence):</strong> Utilizing the Wake Lock API to override the OS sleep timer, keeping the screen brilliantly lit and the camera active while the human works hands-free.</li>
                    <li><strong>HANDOFF (Native Sharing):</strong> Triggering the native iOS/Android Share Sheet to drop an Agent-generated repair log or cryptographic receipt directly into the human&apos;s iMessage or email app.</li>
                </ul>
            </section>
        </>
    );
}
