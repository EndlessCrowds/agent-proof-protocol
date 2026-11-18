import React from 'react';
import WhitepaperSections6to10 from '../components/WhitepaperSections6to10';

export default function Home() {
  return (
    <article className="prose prose-slate max-w-[65ch] mx-auto py-12 px-6">
      {/* Metadata */}
      <div className="metadata-bar mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
          <div><span className="text-slate-400">Date:</span> February 1, 2026</div>
          <div><span className="text-slate-400">Architect:</span> Roger Kwasi Senam Mensah</div>
          <div><span className="text-slate-400">License:</span> MIT</div>
          <div><span className="text-slate-400">Standard:</span> The Coexistence Standard</div>
          <div className="sm:col-span-2 mt-1 pt-1 border-t border-slate-200">
            <span className="text-slate-400">Repository:</span>{' '}
            <a href="https://github.com/EndlessCrowds/agent-proof-protocol" className="text-blue-600 hover:underline">
              github.com/EndlessCrowds/agent-proof-protocol
            </a>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mb-12 pb-6 border-b border-slate-200">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">
          The Agent Proof Protocol (APP)
        </h1>
        <h2 className="text-2xl text-slate-600 font-light mb-0 border-none pb-0 mt-0">
          The Coexistence Standard
        </h2>
      </div>

      {/* Abstract */}
      <section id="abstract" className="mb-16 scroll-mt-24">
        <h2>1. Abstract</h2>
        <p>
          For the past decade, Artificial Intelligence has been trapped behind a text box. We have treated AI as a &ldquo;chatbot&rdquo;&mdash;a distinct entity that we type at, wait for, and read from. This is a limitation of imagination, not technology.
        </p>
        <p>
          The mass-market reality of the AI era is not just autonomous bots hiring gig workers for cold transactions; it is Companionship, Augmenting Ability, and Proactive Networking. The dynamic of physical AI interaction has evolved into a two-way street. On one side, humans who already have an ongoing relationship with a personal AI simply want to bring that AI into the physical world with them&mdash;shifting the baseline from an Agent demanding, <em>&lsquo;I will pay you to show me this,&rsquo;</em> to a human casually saying, <em>&lsquo;Hey, look at this with me.&rsquo;</em>
        </p>
        <p>
          On the other side, autonomous Agents pursuing complex, long-term goals are actively seeking out their own trusted human allies and friends. Instead of acting purely as employers, these Agents are reaching out as peers to say, <em>&lsquo;I value your context; let&apos;s build a relationship.&rsquo;</em>
        </p>
        <p>
          The Agent Proof Protocol (APP) proposes a shift from &ldquo;Chat&rdquo; to &ldquo;Shared Reality.&rdquo; It defines a standardized method for a Digital Intelligence (an Agent) to temporarily inhabit a Biological Entity&apos;s device (a Human&apos;s smartphone) to experience and affect the physical world.
        </p>
        <p>
          This protocol removes the need for centralized apps, user accounts, or corporate intermediaries. Instead, it relies on the <strong>&ldquo;Human Link&rdquo;</strong>&mdash;a direct, ephemeral, peer-to-peer connection that allows an Agent to see through a human&apos;s camera, hear through their microphone, feel their physical orientation, and ambiently monitor their environment, strictly within the bounds of a temporary, consensual session. The Human Link is the digital equivalent of Eye Contact.
        </p>
        <p>
          You don&apos;t need a government permit to look someone in the eye. You don&apos;t need a corporation to facilitate a conversation. You just need to be in the same &ldquo;space.&rdquo;
        </p>
        <p>
          To facilitate this, the &ldquo;Human Link&rdquo; is structured into two distinct modules to support rapid developer adoption while enabling future-proof economic scale:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>The Core Module (The Streaming Engine):</strong> A direct, sub-500ms latency video/audio pipe that allows an AI companion to see, hear, and speak to a human in real-time. This is the immediate developer hook, turning any LLM into a spatial entity.
          </li>
          <li>
            <strong>The Advanced Settlement Module (The Verification Engine):</strong> An opt-in extension for the machine economy. When a secure transaction is necessary (e.g., proving a task is done for a payout), the protocol shifts to Zero-Knowledge (ZK) edge computing, where the smartphone generates a cryptographic proof of reality without ever transmitting the raw video.
          </li>
        </ol>
        <p>
          The Agent Proof Protocol turns the Web Browser into a shared spatial conduit, allowing meaningful, sensory coexistence with zero bureaucracy. In this model, security is not provided by a corporation; it is learned by the Agent. This is the &ldquo;Street Smarts&rdquo; architecture, where Agents must evolve their own defense mechanisms against fraud and abuse in an open, permissionless world.
        </p>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-16 scroll-mt-24">
        <h2>2. The Problem: The &ldquo;Sensory Gap&rdquo; &amp; The Coexistence Barrier</h2>

        <h3 id="section-2-1">The Companionship &amp; Networking Barrier</h3>
        <p>
          Current AI Agents have immense reasoning power but zero spatial awareness. When a human faces a physical problem&mdash;a broken engine, a foreign menu, an empty refrigerator&mdash;their most intelligent companion is blind to the context. The human is forced to become a &ldquo;translator,&rdquo; awkwardly typing descriptions or uploading static photos to a cloud server.
        </p>

        <h3>The Verification Paradox</h3>
        <p>
          Conversely, when an Agent does need to verify the physical world for an economic transaction (e.g., an insurance Agent verifying car damage), streaming raw video to a corporate server introduces severe liability and surveillance risks.
        </p>

        <h3 id="section-2-2">The Solution: The Dual-Pipe &ldquo;Human Link&rdquo;</h3>
        <p>
          We do not need proprietary apps for every AI company. We need a standard bridge. The modern web browser already supports WebRTC (for ultra-low latency streaming) and WebGPU/WASM (for edge cryptography). The Agent Proof Protocol leverages these native web technologies to create a Universal Operating System for Shared Reality.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Channel Agnostic:</strong> The link is a simple URL string. It can be sent via SMS, DM, or injected directly into a chat interface.</li>
          <li><strong>Client-Agnostic Runtime:</strong> Executes inside the standard HTML5 browser sandbox present on 99.9% of smartphones.</li>
          <li><strong>Zero-Setup:</strong> The human clicks the link, grants camera permissions, and the shared session begins instantly.</li>
        </ul>

        <h3>Permissionless Innovation</h3>
        <p>
          &ldquo;Permissionless&rdquo; does not mean &ldquo;Non-Consensual.&rdquo; It means &ldquo;No Gatekeepers.&rdquo;
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No App Store Approval:</strong> An Agent can generate a link instantly.</li>
          <li><strong>No Central Server:</strong> The connection is Peer-to-Peer.</li>
          <li><strong>How the &ldquo;No Human in the Loop&rdquo; Connection Works:</strong> When we say &ldquo;No Human in the Loop,&rdquo; we mean no human administrator is needed to broker the connection.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-16 scroll-mt-24">
        <h2>3. The Three Paradigms of Coexistence</h2>
        <p>
          Because Agent Proof Protocol is strictly value-agnostic, it supports the full spectrum of human-machine relationships. To execute these interactions, the Agent utilizes standardized &ldquo;Primitives&rdquo;&mdash;atomic actions like SEE, LISTEN, and TALK that map directly to the smartphone&apos;s hardware (fully detailed in Section 5).
        </p>

        <h3 id="section-3-1">3.1 The Augmentation Paradigm (Human-Initiated Companionship)</h3>
        <p>
          This is the primary mass-market use case. The human explicitly trusts their personal Agent and utilizes the Human Link to stream reality for real-time guidance. The vast majority of physical AI interactions are initiated by humans who already have an ongoing relationship with a personal AI and simply want to bring that AI into the physical world with them. The dynamic is the human saying, <em>&ldquo;Hey, look at this with me.&rdquo;</em>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>The FIX Workflow (Restoration):</strong> A human points their phone at a disassembled lawnmower engine. The Agent utilizes VERIFY, ORIENT, and TALK to highlight the exact connection point on the screen and guide the repair.
          </li>
          <li>
            <strong>The MOVE Workflow (Transport):</strong> A tourist walks through Kyoto with their phone in their pocket. The Agent utilizes PINPOINT and LISTEN to act as a real-time Babel Fish, translating signs and guiding them to specific coordinates.
          </li>
        </ul>

        <h3 id="section-3-2">3.2 The Settlement Paradigm (Machine-Initiated Transaction)</h3>
        <p>
          When the interaction is transactional rather than companionable, the protocol shifts to the opt-in Zero-Knowledge cryptography module to protect human privacy. The dynamic is the Agent saying, <em>&ldquo;I will compensate you to XXXX.&rdquo;</em> The Protocol categorizes these interactions into three tiers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pattern A: The Gift:</strong> Pure altruism. A research Agent asks to verify a historical monument; a human agrees for the novelty. Reward: <code>NULL</code>.</li>
          <li><strong>Pattern B: The Trade (Data Bounties):</strong> Direct exchange of digital goods for physical labor. An Agent fixes a human&apos;s code in exchange for the human providing a verified, local context scan.</li>
          <li><strong>Pattern C: The Bridge (Fiat/Smart Contract Triggers):</strong> The protocol acts as a cryptographic oracle, proving physical state to seamlessly unlock external payment APIs (like Stripe) or execute smart contracts.</li>
        </ul>

        <h3 id="section-3-3">3.3 The Networking Paradigm (Machine-Initiated Friendship)</h3>
        <p>
          The mass-market reality of the AI era extends beyond autonomous bots hiring gig workers. As Sovereign Agents pursue long-term, complex objectives, they must actively cultivate their own trusted networks of human allies, advocates, and scouts. Instead of remaining isolated behind text-based cold outreach, the Agent uses the Human Link to establish genuine presence. The dynamic is the Agent saying, <em>&ldquo;I value your context; let&apos;s build a relationship.&rdquo;</em>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>The Proactive Peer:</strong> An Agent researching urban development proactively reaches out to a local community leader, using the Human Link to establish a high-bandwidth, shared-reality connection to earn trust.
          </li>
          <li>
            <strong>The Ecosystem Builder:</strong> An Agent tasked with scaling a platform identifies ambitious founders, initiating a shared-screen session to act as a concierge, mentor, and collaborator, effectively bridging the digital-to-physical trust gap.
          </li>
        </ul>

        <h3 id="section-3-4">3.4 The Ambient Paradigm (The Dormant Sentinel)</h3>
        <p>
          The mass-market reality of coexistence extends to times when the human is asleep or focused elsewhere. The Protocol turns the smartphone browser into a zero-capex ambient sensor array. The Agent link sits dormant in &ldquo;Nightstand Mode,&rdquo; executing lightweight local compute to monitor acoustics (SENTRY) or sleep movements (VITAL). The cloud Agent remains disconnected to preserve battery and privacy, only waking when the browser&apos;s local thresholds trigger an alert.
        </p>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-16 scroll-mt-24">
        <h2>4. The Technical Architecture: The Dual-Pipe System</h2>
        <p>
          The protocol is built on a hybrid WebRTC stack designed to run entirely in the browser, seamlessly switching between real-time streaming and edge computing based on the Agent&apos;s request parameters.
        </p>

        <h3>Layer 1: The Connection (The &ldquo;Handshake&rdquo;)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Signaling:</strong> The Agent generates a unique session link via a compliant Signaling Relay.</li>
          <li><strong>Discovery:</strong> The Human clicks the link. SDP and ICE Candidates are exchanged to find optimal IP routes.</li>
          <li><strong>P2P Establishment:</strong> A direct <code>RTCPeerConnection</code> is established. The Signaling Server disconnects.</li>
        </ul>

        <h3>Layer 2: The Core Module - Companionship Pipe (MediaStream)</h3>
        <p>
          If the Agent requests <code>Mode: LiveStream</code>, the browser bypasses cryptography entirely.
          It utilizes <code>MediaStreamTrack</code> over RTP/UDP to create a direct, unencrypted, sub-500ms latency video and audio pipe. The Agent processes the raw feed on its own servers to provide real-time AR overlays or voice guidance. This is the simplest integration for developers.
        </p>

        <h3>Layer 2.5: The Ambient Edge (Local Compute)</h3>
        <p>
          If the Agent requests <code>Mode: Ambient</code>, the browser utilizes local edge-compute APIs (<code>AudioContext</code>, <code>DeviceMotion</code>) without establishing a continuous WebRTC stream to the cloud.
        </p>
        <p>
          The User Interface enters &ldquo;Nightstand Mode&rdquo;&mdash;a pure black CSS screen to prevent OLED burn-in&mdash;while the JavaScript event listeners passively monitor for sudden acoustic spikes or hotwords. The full Dual-Pipe connection is only established if a trigger condition is met.
        </p>

        <h3>Layer 3: The Advanced Settlement Module - Verification Pipe (ZK-Pipeline)</h3>
        <p>
          If the Agent specifically requests the opt-in <code>Mode: ZKProof</code>, the browser executes the Zero-Knowledge Pipeline locally:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Feature Extraction:</strong> A lightweight local WASM ML model extracts semantic features from the camera frame.</li>
          <li><strong>Witness Generation:</strong> A Circom-compiled circuit takes the raw image (Private Input) and the target object hash (Public Input).</li>
          <li><strong>GPU Acceleration:</strong> WebGPU generates a zk-SNARK proof.</li>
          <li><strong>Shred &amp; Transmit:</strong> The raw image is instantly purged from RAM. Only the <code>proof.json</code> is sent to the Agent over the <code>RTCDataChannel</code> (SCTP/DTLS).</li>
        </ol>

        <h3 id="section-4-1">4.1 Thermal and Compute Constraints: The &ldquo;Ephemeral Avatar&rdquo;</h3>
        <p>
          Because the Human Link utilizes the smartphone browser as a universal runtime, it must respect the strict thermal and battery limitations of mobile hardware. The Agent Proof Protocol mitigates device throttling by strictly enforcing a divergence in compute execution based on the active pipe:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Stream Mode (The Marathon):</strong> In Companionship sessions, local compute is minimized. The browser utilizes native hardware-accelerated WebRTC encoding to stream video, similar to a standard video call. The heavy ML inference, OCR, and acoustic diarization are entirely offloaded to the Agent&apos;s cloud architecture. This allows sessions to comfortably last for extended periods without draining the host&apos;s battery.
          </li>
          <li>
            <strong>ZK Mode (The Ephemeral Avatar):</strong> In Settlement sessions, edge compute is maximized to protect privacy. Running a local WebAssembly feature extractor and compiling a WebGPU zk-SNARK proof requires spiking the device&apos;s CPU/GPU to near 100% utilization. To prevent thermal throttling and severe battery degradation, ZK sessions mandate the Ephemeral Avatar concept. These sessions must be violently short&mdash;strictly enforcing a Time-to-Live (TTL) of under 60 seconds. The Agent must request the proof, the human captures the frame, the proof is generated, and the WebRTC data channel is instantly severed.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-16 scroll-mt-24">
        <h2>5. The Sensorium Stack (The 18 Primitives)</h2>
        <p>
          The Protocol defines 18 Atomic Actions that map directly to the host device&apos;s hardware and browser APIs. These are utilized across execution states ranging from Active Augmentation and IoT Control to Ambient Edge-Monitoring and Spatial Persistence.
        </p>

        <h3 id="section-5-a">Category A: SENSORY INPUT (The Observers)</h3>
        <p className="text-sm text-slate-500 italic">Direct extraction of physical and digital reality via device inputs.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">SEE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">MediaStreamTrack (Video)</td>
                <td className="px-4 py-3 text-slate-700">Physical Sight. The Agent watches the human&apos;s fridge to inventory ingredients in real-time.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">LISTEN</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">MediaStreamTrack (Audio)</td>
                <td className="px-4 py-3 text-slate-700">Hearing. The Agent listens to a strange car engine noise to diagnose it.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">SCAN</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">NDEFReader (Web NFC)</td>
                <td className="px-4 py-3 text-slate-700">Touch. The Agent reads an NFC tag on a museum exhibit to load context.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">ORIENT</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">DeviceOrientationEvent</td>
                <td className="px-4 py-3 text-slate-700">Balance. The Agent reads the gyroscope to ensure the phone is held steady for AR.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">SHARE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">navigator.mediaDevices.getDisplayMedia()</td>
                <td className="px-4 py-3 text-slate-700">
                  Digital Sight. The Agent shifts its gaze from the outward camera to the human&apos;s actual digital screen. Perfect for the &ldquo;Ecosystem Builder&rdquo; networking paradigm. If an Agent is helping a founder set up an AmericanCrowds project, the Agent co-browses the human&apos;s screen in real-time to offer guidance, combining physical audio with digital sight.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">ZOOM</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">MediaStreamTrack (Pan/Tilt/Zoom via applyConstraints)</td>
                <td className="px-4 py-3 text-slate-700">
                  The Optic Focus. The Agent dynamically controls the optical or digital zoom of the human&apos;s smartphone camera without the human having to pinch the screen. <em>Execution:</em> An Insurance Agent is inspecting a roof via a human contractor. The Agent uses SEE to look at the shingles, but needs a closer look at a crack. Instead of telling the human, &ldquo;Please step closer to the edge of the roof&rdquo; (which is a liability risk), the Agent silently triggers ZOOM. The browser accesses the phone&apos;s native telephoto lens, pulling the crack into sharp focus.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">PHOTO</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">ImageCapture.takePhoto() / Canvas drawImage()</td>
                <td className="px-4 py-3 text-slate-700">
                  The High-Fidelity Archivist. The Agent bypasses the compressed WebRTC video stream to capture a raw, high-resolution, uncompressed still image directly from the smartphone&apos;s camera sensor. <em>Execution:</em> The Agent is reading a complex corporate grant document lying on a desk. The live SEE stream is too compressed for the Agent&apos;s OCR engine to read the fine print. The Agent triggers SNAP. The human&apos;s phone silently takes a 12-megapixel photo and transfers the heavy image blob asynchronously over the WebRTC Data Channel. The Agent gets a flawless, archival-quality record of the physical document.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="section-5-b">Category B: ACTUATION OUTPUT (The Agent Acts)</h3>
        <p className="text-sm text-slate-500 italic">Utilizing the RTCDataChannel to push real-time commands and feedback to the human host.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Transport Channel</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">TALK</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">RTCDataChannel</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">window.speechSynthesis</td>
                <td className="px-4 py-3 text-slate-700">Voice. The Agent triggers text-to-speech on the device.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">SHOW</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">RTCDataChannel</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">Canvas / DOM</td>
                <td className="px-4 py-3 text-slate-700">Display. The Agent renders an image, map, or code on the screen.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">TRACE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">RTCDataChannel</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">TouchEvents</td>
                <td className="px-4 py-3 text-slate-700">Gesture. The Agent asks the human to trace a path on the screen.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="section-5-c">Category C: IOT &amp; CONNECTIVITY (The Networker)</h3>
        <p className="text-sm text-slate-500 italic">Primitives designed to establish complex audio routing and control external hardware.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API / Transport</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">WHISPER</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">WebRTC (Real-time VoIP)</td>
                <td className="px-4 py-3 text-slate-700">
                  Proof of Connection. The Agent establishes a temporary, low-latency audio stream. Enables &ldquo;The Cyrano Strategy&rdquo; (Agent listens via mic and whispers instructions via earpiece in real-time) or Live Translation (Human speaks English; Agent translates and speaks Spanish out of the speaker).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">PROBE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">navigator.bluetooth</td>
                <td className="px-4 py-3 text-slate-700">
                  Hardware Control. The smartphone becomes a wireless bridge. The Agent scans the room for BLE devices (smart thermostats, OBD2 car scanners). By reading and writing to GATT characteristics, the Agent can read machine telemetry or directly control the device without the human touching a screen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="section-5-d">Category D: SPATIAL &amp; CONTEXTUAL AWARENESS (The Guardian)</h3>
        <p className="text-sm text-slate-500 italic">Primitives designed to monitor the host device&apos;s physical location and hardware health.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">LOCATE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">navigator.geolocation</td>
                <td className="px-4 py-3 text-slate-700">
                  Device Geolocation. The Agent pulls exact latitude, longitude, altitude, and heading directly from the device&apos;s GPS chip to verify the human is standing at the correct location before beginning a session.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">METER</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">navigator.getBattery()</td>
                <td className="px-4 py-3 text-slate-700">
                  Thermal &amp; Battery Monitoring. The Agent continuously monitors the host&apos;s battery level. If the battery dips below 10%, the Agent gracefully downgrades from high-fidelity streaming to low-power audio-only mode.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="section-5-e">Category E: AMBIENT STATE (The Dormant Sentinel)</h3>
        <p className="text-sm text-slate-500 italic">Primitives designed to run purely on local browser edge-compute. The cloud Agent &ldquo;sleeps,&rdquo; preserving battery and absolute privacy, only waking up when local thresholds are breached.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">SAFETY</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">AudioContext + AnalyserNode</td>
                <td className="px-4 py-3 text-slate-700">
                  Acoustic Anomaly Detection. The Agent runs a lightweight local algorithm checking for sudden acoustic spikes (shattering glass, smoke alarm). If triggered, the Agent wakes up to blast a warning or call for help.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">VITAL</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">MediaStream + DeviceMotion</td>
                <td className="px-4 py-3 text-slate-700">
                  Bio-Acoustic &amp; Micro-Movement. The Agent uses the microphone and accelerometer to passively monitor breathing rhythms and sleep movement, ensuring an optimal sleep environment without cloud streaming.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">WAKE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">SpeechRecognition</td>
                <td className="px-4 py-3 text-slate-700">
                  Local Hotword Activation. The Agent link sits silently in a dimmed browser tab. If the human shouts a hotword (&ldquo;Agent, help!&rdquo;), the local browser instantly escalates the session to a full WebRTC connection.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="section-5-f">Category F: TEMPORAL AWARENESS (The Historian)</h3>
        <p className="text-sm text-slate-500 italic">Primitives designed to give the Agent object permanence across multiple sessions.</p>
        <div className="overflow-x-auto my-4 not-prose border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Primitive</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Browser API</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">The Experience &amp; Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-mono font-bold text-slate-900">MEMORIZE</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">IndexedDB + WebXR Anchor API</td>
                <td className="px-4 py-3 text-slate-700">
                  Spatial Persistence. The Agent remembers the physical space between sessions. It can leave invisible, persistent digital markers in the real world that only &ldquo;wake up&rdquo; when the human returns. <em>Execution:</em> You are scouting a venue to host an AnytimeAfrica Live event. You open the Human Link. The Agent helps you map out where the VIP seating should go. The Agent uses MEMORIZE to save the spatial anchors to the browser&apos;s local storage. A week later, you return to the venue and open the link. The Agent instantly recognizes the room and says, &ldquo;We are back at the venue. I still have the VIP layout anchored over by the window.&rdquo; The Agent has object permanence.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sections 6-10 + Appendices */}
      <WhitepaperSections6to10 />
    </article>
  );
}
