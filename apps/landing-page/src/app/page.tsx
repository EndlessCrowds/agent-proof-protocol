export default function Home() {
  return (
    <article className="prose prose-slate max-w-[80ch]">
      {/* Header Section */}
      <div className="mb-12 pb-6 border-b border-slate-200">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Agent Proof Protocol (APP) v2.1
        </h1>
        <p className="text-xl text-slate-600 font-light">
          The Universal Execution Layer for Agentic Commerce
        </p>
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 italic">
          "Visa authorizes the spend. Google defines the intent. We verify the reality."
        </div>
      </div>

      {/* Abstract */}
      <section id="abstract" className="mb-16 scroll-mt-24">
        <h2>1. Abstract: The TCP/IP of Labor</h2>
        <p>
          The global economy is currently undergoing a phase transition of historical magnitude: the shift from the Information Age to the Agentic Era. In this new epoch, software no longer merely retrieves information; it autonomously executes economic actions.
        </p>
        <p>
          However, this transition is currently arrested by a "Last Mile" infrastructure failure. The three critical pillars of the autonomous economy are speaking mutually unintelligible dialects:
        </p>
        <ul className="list-none pl-0 space-y-2 mt-4">
          <li className="flex gap-3">
            <span className="font-bold text-slate-900 min-w-[140px]">Identity (Google AP2):</span>
            <span className="text-slate-600">Defines what the agent wants to achieve (Intent).</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-slate-900 min-w-[140px]">Finance (Visa TAP):</span>
            <span className="text-slate-600">Defines how the agent pays (Authorization).</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-slate-900 min-w-[140px]">Execution (Physical):</span>
            <span className="text-slate-600">Remains a fragmented, opaque, and disconnected layer of incompatible labor marketplaces.</span>
          </li>
        </ul>
        <p>
          The Agent Proof Protocol (APP) resolves this deadlock by establishing the <strong>Universal Execution Layer</strong>. Just as TCP/IP allowed disparate networks to communicate by standardizing packet transmission, APP standardizes the transmission of Work Orders. It functions as a deterministic middleware—a "Universal Translation Gateway"—that ingests digital mandates from Google and Visa, translates them into semantic "Labor Primitives," and routes them for execution by a cryptographically verified human workforce.
        </p>
      </section>

      {/* Interoperability Thesis */}
      <section id="interoperability" className="mb-16 scroll-mt-24">
        <h2>2. The Interoperability Thesis: The Atomic Bridge</h2>
        <p>
          APP v2.1 is the first protocol architecture designed explicitly to bridge the three dominant standards of the next decade. It provides the "connective tissue" that allows a silicon brain to move a biological hand without friction.
        </p>

        <h3 id="translation-engine">2.1 The Translation Engine (Kernel Logic)</h3>
        <p>
          The core of APP is a deterministic logic gate that normalizes traffic between isolated ecosystems. It abstracts the complexity of the supply chain, allowing an Agent to be "Platform Agnostic."
        </p>

        <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="w-[15%]">Layer</th>
                <th className="w-[15%]">Standard</th>
                <th>The APP Translation Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-xs">Ingress</td>
                <td>Google AP2</td>
                <td>
                  <strong>The Brain.</strong> APP accepts the Intent_Mandate (JSON). It parses complex, unstructured goals (e.g., "My server room is hot") into a specific, executable Labor Primitive (PRIMITIVE: MAINTAIN).
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Auth</td>
                <td>Visa TAP</td>
                <td>
                  <strong>The Wallet.</strong> APP accepts the Agent_Auth_Token. It holds this fiat authorization in a Smart Escrow Contract, acting as the "Oracle" that triggers final settlement only when physical truth is verified.
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Identity</td>
                <td>ERC-8004</td>
                <td>
                  <strong>The Passport.</strong> APP validates the Agent's on-chain reputation before dispatching a human. This prevents "Sybil Attacks" where malicious bots spam physical workers with fake requests.
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Egress</td>
                <td>APP v2.1</td>
                <td>
                  <strong>The Hand.</strong> Routes the normalized request to the optimal physical provider via the Liquidity Assurance Protocol.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="workflow">2.2 The "Atomic Bridge" Workflow</h3>
        <p>To visualize the power of this bridge, consider a single atomic transaction:</p>
        <ol className="list-decimal pl-6 space-y-2 marker:text-slate-500 text-slate-700">
          <li><strong>Google Layer:</strong> An Agent sends an intent: "Verify shelf stock at 5th Ave store."</li>
          <li><strong>Visa Layer:</strong> The Agent attaches a Visa Token locking $50.00 in funding.</li>
          <li><strong>APP Layer:</strong> The Translation Engine converts this to <code>PRIMITIVE: VERIFY</code> and broadcasts it to the local mesh.</li>
          <li><strong>Physical Layer:</strong> A Human "Sensor" executes the task and provides Proof of Physics (Wi-Fi RTT).</li>
          <li><strong>Settlement:</strong> APP validates the proof and generates a Settlement_Token.</li>
          <li><strong>Finality:</strong> The Visa network sees the token and instantaneously releases the $50.00 to the worker's wallet.</li>
        </ol>
      </section>

      {/* Labor Primitives */}
      <section id="primitives" className="mb-16 scroll-mt-24">
        <h2>3. The 5 Labor Primitives (The Schema)</h2>
        <p>
          Complexity is the enemy of automation. To enable seamless machine-to-human commerce, the Protocol semantically reduces the infinite complexity of human effort into five distinct, atomic "Verbs."
        </p>

        <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="w-[15%]">Primitive</th>
                <th className="w-[20%]">Semantic Action</th>
                <th className="w-[25%]">Target Supply</th>
                <th>Validation Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono font-bold text-blue-600">VERIFY</td>
                <td>The Eyes</td>
                <td>Native Swarm (P2P)</td>
                <td>Wi-Fi RTT + Witness Chain. Used for ground truth, retail audits, and anti-spoofing.</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-blue-600">FIX</td>
                <td>The Hands</td>
                <td>Residential / Assembly</td>
                <td>Proof of Completion. Used for unskilled labor, furniture assembly, and cleaning.</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-blue-600">MAINTAIN</td>
                <td>The Hands (Pro)</td>
                <td>Enterprise / Licensed</td>
                <td>Proof of License. Cryptographic validation of trade credentials (HVAC, Electrical, IT).</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-blue-600">MOVE</td>
                <td>The Wheels</td>
                <td>Logistics / Courier</td>
                <td>Package Passport. A QR-based handshake that links digital ownership to physical custody.</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-blue-600">THINK</td>
                <td>The Brain</td>
                <td>RLHF / Cognitive</td>
                <td>Consensus. Used for data labeling, reinforcement learning, and subjective review.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Liquidity Assurance */}
      <section id="liquidity" className="mb-16 scroll-mt-24">
        <h2>4. The Liquidity Assurance Protocol (Fail-Safe Routing)</h2>
        <p>
          An infrastructure protocol cannot fail. APP guarantees 100% Liquidity via a "Waterfall" routing mechanism that optimizes for Latency, Cost, and Certainty.
        </p>

        <div className="space-y-8 mt-6">
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h4 className="mt-0 text-slate-900">Priority 0: The Native Swarm (Layer 1 P2P)</h4>
            <ul className="text-sm space-y-2 mt-2">
              <li><strong>Architecture:</strong> Direct Machine-to-Human connection via the APP Client.</li>
              <li><strong>Logic:</strong> The Protocol always queries this layer first. It leverages "Zero-Hop" routing to connect agents directly to local human sensors.</li>
              <li><strong>Benefit:</strong> Zero-latency execution with no API middleware friction.</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h4 className="mt-0 text-slate-900">Priority 1: The Aggregator Bridge (Layer 2 Legacy Adapter)</h4>
            <p className="text-sm mb-4">
              If the Native Swarm is saturated, the Protocol acts as a "Universal API Client," programmatically purchasing labor from legacy pools to guarantee execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Logistics (MOVE):</strong> Uber Direct, DoorDash Drive, Roadie.
              </div>
              <div>
                <strong>General Labor (FIX):</strong> TaskRabbit, Thumbtack.
              </div>
              <div>
                <strong>Skilled Trade (MAINTAIN):</strong> Field Nation, WorkMarket.
              </div>
              <div>
                <strong>Cognitive (THINK):</strong> Scale AI, Amazon MTurk.
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <h4 className="mt-0 text-slate-900">Priority 2: The Economic Surge (Market Clearing)</h4>
            <p className="text-sm">
              If no provider accepts the task at the reserve price, the Protocol enters "Surge Mode." It broadcasts the task to the open web with dynamic pricing, autonomously raising the bounty second-by-second until a market-clearing price is discovered.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Verification */}
      <section id="verification" className="mb-16 scroll-mt-24">
        <h2>5. Trust & Verification: The DePIN Stack</h2>
        <p>
          In an era of Deepfakes and AI voice synthesis, "Digital Trust" is dead. We replace "Trust" with "Proof." We rely on the laws of physics to verify reality.
        </p>

        <h3>5.1 Proof of Location (IEEE 802.11mc)</h3>
        <p>GPS is passive and easily spoofed. APP v2.1 mandates Wi-Fi RTT (Round Trip Time).</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The Physics:</strong> The protocol measures the Time of Flight of radio signals between the worker's device and nearby Wi-Fi Access Points (Anchors). Since the speed of light is constant ($c$), this measurement cannot be faked via software.</li>
          <li><strong>Witness Chain:</strong> The measurement is cryptographically signed by the device's Trusted Execution Environment (TEE), creating an unforgeable "Proof of Physics."</li>
        </ul>

        <h3>5.2 Identity: ERC-8004</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Agents:</strong> Must present a valid ERC-8004 identity to interact with the protocol. This creates an on-chain reputation score for AI Agents, preventing spam.</li>
          <li><strong>Workers:</strong> Utilize Zero-Knowledge Proofs (ZKPs) to prove "Humanity" and "Reputation" without revealing Personally Identifiable Information (PII).</li>
        </ul>
      </section>

      {/* Settlement */}
      <section id="settlement" className="mb-16 scroll-mt-24">
        <h2>6. Settlement: The x402 Standard</h2>
        <p>
          The legacy financial system (Net-30, Chargebacks) is incompatible with autonomous agents that operate at the speed of code. APP v2.1 implements HTTP 402 (Payment Required).
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Mechanism:</strong> When an Agent requests a task, the API responds with a 402 Payment Required header containing a Lightning Network invoice or Stablecoin challenge.</li>
          <li><strong>Streaming:</strong> For time-based tasks (THINK / MAINTAIN), funds stream second-by-second. This transforms labor from a debt-based contract to a real-time asset swap.</li>
          <li><strong>Finality:</strong> Settlement is atomic. The Settlement_Token is only issued when the cryptographic Proof_of_Physics is verified.</li>
        </ul>
      </section>

      {/* JSON Standard */}
      <section id="json-standard" className="mb-16 scroll-mt-24">
        <h2>7. Implementation Guide: The JSON Standard</h2>
        <p>This schema is the "Lingua Franca" of the Agentic Economy. It is the single data structure that bridges Google's intent, Visa's money, and Web3's execution.</p>

        <pre><code className="language-json">{`{
  "protocol": "APP_v2.1",
  "ingress_rail": "GOOGLE_AP2",
  "auth_token": "VISA_TAP_x892...",
  "intent": {
    "primitive": "VERIFY",
    "target": "34.0522,-118.2437",
    "requirements": ["WIFI_RTT_SIG", "BIO_LIVENESS"]
  },
  "settlement": {
    "method": "x402_LIGHTNING",
    "escrow_amount": 50000,
    "currency": "SATS"
  }
}`}</code></pre>
      </section>

      {/* Governance */}
      <section id="governance" className="mb-24 scroll-mt-24 pt-8 border-t border-slate-200">
        <h2>8. Governance & Attribution</h2>
        <p>
          The Agent Proof Protocol is a public good. It is the open standard for the Agentic Century. We invite the world's engineers, cryptographers, and economists to collaborate on building the infrastructure that ensures AI remains a partner to humanity, not a replacement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">Architect</div>
            <div className="text-slate-900 font-medium">Roger Kwasi Senam Mensah</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">Timestamp</div>
            <div className="text-slate-900 font-medium">February 1, 2026</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">Repository</div>
            <div className="text-blue-600 font-medium font-mono text-sm">github.com/agent-proof-protocol</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase">License</div>
            <div className="text-slate-900 font-medium">MIT Open Source</div>
          </div>
        </div>
      </section>
    </article>
  );
}
