import React from 'react';
import CopyButton from './CopyButton';

const APPENDIX_B_CODE = `class PhysicalTask:
    """
    The Universal Interface for Agent-to-World Interaction.
    """
    def __init__(self, api_key: str, base_url: str = "https://api.agentcrowds.com/v1"):
        """
        Initialize the Protocol Client.
        :param base_url: The Settlement Gateway. Defaults to the Reference Liquidity Node (api.agentcrowds.com). 
                         Enterprise users may override this for On-Premise Gateways.
        """
        self.base_url = base_url

    def create(
        primitive: str,          # VERIFY, FIX, MAINTAIN, MOVE, THINK
        subtype: str,            # Specific domain (e.g., PLUMBING, BAKERY_QC)
        location: str,           # Coordinates or Address
        provider: str = "AUTO",  # Specific provider or Auto-Router
        verification: str = "RTT", # Level of Proof required
        budget: int = 0,         # Budget in Cents
        payment_token: str = None, # Payment Token (Runtime dependent)
        sandbox: bool = False,   # CI/CD Simulation Mode
        dependencies: list = []  # List of Task IDs (Strings)
    ) -> TaskObject:
        """
        Generates a cryptographically secured work order suitable for 
        transmission via HTTP, Pipe, or IPC.
        """
        pass`;

export default function WhitepaperSections5to8() {
    return (
        <>
            {/* Section 5 */}
            <section id="section-5" className="mb-16 scroll-mt-24">
                <h2>5. The Trust &amp; Verification Layer: DePIN</h2>
                <p>In the Agentic Economy, money is easy; truth is hard. APP introduces &ldquo;Proof of Physics&rdquo; as a prerequisite for settlement.</p>

                <h3 id="section-5-1">5.1 Proof of Location: Wi-Fi RTT (802.11mc)</h3>
                <p>GPS is easily spoofed. APP mandates Wi-Fi Round Trip Time (RTT) for Trust Level 1 verification.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>The Physics:</strong> The device sends a burst of packets to nearby Wi-Fi Access Points. It measures the time of flight (d = c * t/2).</li>
                    <li><strong>The Security:</strong> To spoof this, a bot would need to alter the speed of light or hack the firmware of the physical router on-site.</li>
                </ul>

                <h3 id="section-5-2">5.2 The Privacy Firewall</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>On-Device Anonymization:</strong> The Protocol Client processes images locally using Edge AI. Faces and personal data are blurred before the image leaves the phone.</li>
                    <li><strong>Ephemeral Verification:</strong> For sensitive checks, the image is analyzed locally (e.g., &ldquo;Is the door open? -&gt; YES&rdquo;), hashed, and deleted. Only the cryptographic proof is uploaded.</li>
                </ul>

                <h3 id="section-5-3">5.3 Protocol Integrity: Configurable Settlement Layer</h3>
                <p>To prevent &ldquo;Supply Chain&rdquo; risks and ensure compliance with Enterprise Data Residency requirements, APP v2.4 enforces a Zero-Trust Egress Policy.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Configurable Endpoints:</strong> The Protocol does not hardcode the settlement destination. Enterprise Agents can configure the <code>base_url</code> to point to self-hosted APP Instances or Private Cloud Gateways, ensuring that sensitive task data never leaves the corporate VPC.</li>
                    <li><strong>Audit Logging:</strong> All PhysicalTask emissions generate a local cryptographic hash (SHA-256) of the intent and payload before transmission, allowing Security Operations Centers (SOC) to audit exactly what the Agent requested versus what was executed.</li>
                </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-16 scroll-mt-24">
                <h2>6. The Financial Unification Layer</h2>
                <p>The global payments industry has made extraordinary advancements in Digital Authorization. Leading protocols now allow AI Agents to securely hold funds, prove identity, and browse inventory. However, a critical gap remains in Physical Settlement. While an Agent can authorize a payment digitally, it currently lacks the sensory input to know if the physical service was actually rendered.</p>
                <p>APP acts as this missing &ldquo;Physical Trigger.&rdquo; We provide the cryptographic Ground Truth that Visa, Mastercard, and Stripe require to release funds safely, transforming a digital promise into a verified physical transaction.</p>

                <h3 id="section-6-1">6.1 Identity Layer: Visa Trusted Agent Protocol (TAP)</h3>
                <p><strong>The Function:</strong> Visa TAP solves the &ldquo;Who&rdquo; problem. It provides a universal standard for Agents to cryptographically identify themselves, distinguishing legitimate AI shoppers from malicious bots.</p>
                <p><strong>The APP Integration (via WebMCP):</strong> When an Agent invokes a tool via WebMCP (e.g., <code>navigator.modelContext.execute(&#39;PhysicalTask&#39;, payload)</code>), the Protocol mandates the inclusion of the Visa TAP Identity Certificate within the metadata header. APP validates this certificate before processing the request. If the Agent lacks a valid Visa TAP signature, the WebMCP call is rejected at the browser edge, preventing &ldquo;Agent Spam&rdquo; and DDoS attacks on the physical supply chain.</p>

                <h3 id="section-6-2">6.2 Tokenization Layer: Mastercard Agent Pay</h3>
                <p><strong>The Function:</strong> Mastercard Agent Pay solves the &ldquo;Security&rdquo; problem. It allows Agents to issue &ldquo;Agentic Tokens&rdquo; restricted to specific contexts (e.g., &ldquo;One-time use, max $50&rdquo;), ensuring the underlying funding source is never exposed.</p>
                <p><strong>The APP Integration:</strong> APP accepts these Agentic Tokens as valid proof of funds. Crucially, in a WebMCP context, the Agent passes the <code>payment_token</code> as a secured string parameter within the <code>PhysicalTask.create()</code> payload. This allows the APP Middleware to lock the funds instantly upon request generation, while the Agent remains cryptographically isolated from the transaction risk.</p>

                <h3 id="section-6-3">6.3 Commerce Layer: Stripe Agentic Commerce</h3>
                <p><strong>The Function:</strong> Stripe&apos;s Agentic Commerce Suite solves the &ldquo;Inventory&rdquo; problem. It allows merchants to syndicate their product catalogs and pricing directly to AI Agents via API.</p>
                <p><strong>The APP Integration:</strong> APP serves as the Logistics Bridge for these transactions. When an Agent buys a product via Stripe, it uses APP&apos;s MOVE primitive to hire a courier for the &ldquo;Last Mile&rdquo; delivery. APP updates the Stripe payment intent with the &ldquo;Proof of Delivery&rdquo; (QR Scan), triggering the final capture of funds.</p>

                <h3 id="section-6-4">6.4 Policy Layer: Payman.ai</h3>
                <p><strong>The Function:</strong> Payman solves the &ldquo;Budget&rdquo; problem. It provides a sandbox where human owners set strict &ldquo;Guardrails&rdquo; (e.g., &ldquo;$500/week limit&rdquo;) on Agent spending.</p>
                <p><strong>The APP Integration:</strong> APP acts as the Oracle for Payman policies. If a Payman policy states &ldquo;Release funds only upon verified repair,&rdquo; APP provides the cryptographic proof (Wi-Fi RTT logs) that satisfies the policy condition and unlocks the wallet.</p>

                <h3 id="section-6-5">6.5 Web3 Layer: Coinbase AgentKit &amp; x402</h3>
                <p><strong>The Function:</strong> For Agents operating outside traditional banking, Coinbase AgentKit provides the standard for on-chain wallet management, while the x402 (L402) protocol enables HTTP-native micropayments.</p>
                <p><strong>The APP Integration:</strong> APP is fully compatible with AgentKit, enabling &ldquo;Streaming Settlement.&rdquo; For time-based tasks (like MAINTAIN), APP streams satoshis or USDC every second, contingent on the worker&apos;s continued physical presence.</p>

                <h3 id="section-6-6">6.6 The &ldquo;Physical Trigger&rdquo; (APP&apos;s Unique Role)</h3>
                <p>The critical innovation is that APP creates the conditional logic for money movement.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>The Stack:</strong> Visa, Mastercard, Stripe, and Payman allow the Agent to promise payment.</li>
                    <li><strong>The Trigger:</strong> APP ensures the Agent delivers payment only when reality matches the promise.</li>
                    <li><strong>Mechanism:</strong> The Settlement Gateway holds the authorized funds (Fiat or Crypto). It listens for the Proof of Physics (Bio-Liveness, Geo-Fencing, RTT). Once the physical world state is verified, APP executes the final settlement via the chosen rail, closing the loop between digital intent and physical reality.</li>
                </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-16 scroll-mt-24">
                <h2>7. Implementation Guide: The &ldquo;First Principles&rdquo; Workflow</h2>
                <p>To illustrate the power of Compound Intents, consider a high-complexity humanitarian scenario: &ldquo;The Disaster Relief Chain.&rdquo;</p>
                <p><strong>Scenario:</strong> An AI Philanthropy Agent (Agent_0x99) needs to deploy a solar-powered water filtration unit to a remote village in Ghana. This requires coordination across verification, logistics, and technical installation.</p>

                <h3 id="section-7-1">Step 1: VERIFY (The Scout)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Agent Action:</strong> Dispatches VERIFY to confirm the access road to the village is passable for a truck.</li>
                    <li><strong>Primitive:</strong> VERIFY | sub_type: ROAD_CONDITION</li>
                    <li><strong>Outcome:</strong> Grid User scans road. Protocol validates Location Proof. Returns PASSABLE: TRUE.</li>
                    <li><strong>Task Hash:</strong> <code>0x100...</code></li>
                </ul>

                <h3 id="section-7-2">Step 2: MOVE (The Logistics)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Agent Action:</strong> Automatically triggers MOVE to transport the unit from Accra to the village.</li>
                    <li><strong>Dependency:</strong> <code>[&quot;0x100...&quot;]</code> (Locked until Step 1 is True).</li>
                    <li><strong>Primitive:</strong> MOVE | sub_type: FREIGHT</li>
                    <li><strong>Outcome:</strong> Driver scans QR code at drop-off. Protocol validates Handshake.</li>
                    <li><strong>Task Hash:</strong> <code>0x200...</code></li>
                </ul>

                <h3 id="section-7-3">Step 3: FIX (The Installation)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Agent Action:</strong> Triggers FIX for a local technician to install the filtration unit.</li>
                    <li><strong>Dependency:</strong> <code>[&quot;0x200...&quot;]</code> (Locked until the unit is on-site).</li>
                    <li><strong>Primitive:</strong> FIX | sub_type: SOLAR_INSTALL</li>
                    <li><strong>Outcome:</strong> Technician installs unit. Uploads video of water flowing. Protocol validates Liveness.</li>
                    <li><strong>Task Hash:</strong> <code>0x300...</code></li>
                </ul>

                <h3 id="section-7-4">Step 4: MAINTAIN (The Warranty &mdash; &ldquo;Perpetual Primitive&rdquo;)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Agent Action:</strong> Spawns a recurring MAINTAIN task (every 30 days) for a technician to change the filter.</li>
                    <li><strong>Logic:</strong> This is a &ldquo;Perpetual Primitive&rdquo;&mdash;a smart contract that refills itself with budget every month as long as the previous verification proofs are valid.</li>
                </ul>

                <p className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
                    <strong>Summary:</strong> The Agent did not need to micro-manage the workers. It defined the structure (The Molecule) and funded the outcome. The APP Protocol handled the orchestration, ensuring that funds were never released for installation until the delivery was cryptographically proven.
                </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="mb-16 scroll-mt-24">
                <h2>8. Conclusion: The TCP/IP of Labor &amp; Reality</h2>
                <p>We stand at the threshold of a civilizational bifurcation: <em>Automated Isolation</em>, where AI operates in closed digital loops, or <em>Algorithmic Symbiosis</em>, where AI becomes the primary driver of human economic opportunity.</p>
                <p>APP chooses Symbiosis. By providing the PhysicalTask standard, we allow AI Agents to treat the global workforce&mdash;from Freight Drivers in New York to Bakers in Paris&mdash;as a programmable, trustworthy API.</p>
                <p className="font-bold text-lg mt-6">Demand is Digital. Execution is Hybrid. Verification is Mandatory.</p>
            </section>

            {/* Appendix A */}
            <section id="appendix-a" className="mb-16 scroll-mt-24 border-t border-slate-200 pt-8">
                <h2>Appendix A: Global Adapter Library (Reference Implementation)</h2>
                <p>To ensure immediate global liquidity, the APP Reference Implementation (AgentCrowds) includes pre-built adapters for the following execution networks. This allows Developers to utilize the Protocol without building custom integrations for each provider.</p>

                <h3 id="appendix-a-0">A.0 PRIMITIVE: THE RUNTIME BRIDGES</h3>
                <p>To ensure compatibility with any Agent architecture, the Reference Implementation includes three native bridges.</p>

                <h4 id="appendix-a-0-1">A.0.1 BROWSER BRIDGE (WebMCP)</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Environment:</strong> Google Chrome / Edge / Gemini Nano</li>
                    <li><strong>Implementation:</strong> The APP Reference Implementation includes a native WebMCP Tool Definition. Any website integrating the APP Bridge snippet automatically exposes <code>PhysicalTask.create()</code> to visiting agents via <code>navigator.modelContext</code>.</li>
                    <li><strong>Architecture:</strong> Event-driven DOM injection (Client-Side).</li>
                    <li><strong>Activation:</strong> <code>{`<script src="https://js.agentproof.com/v2/bridge.js"></script>`}</code></li>
                </ul>

                <h4 id="appendix-a-0-2">A.0.2 SERVER BRIDGE (MCP)</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Environment:</strong> Node.js / Python / Docker</li>
                    <li><strong>Implementation:</strong> The Reference Implementation includes a generic MCP Server configuration (app-mcp-server) that broadcasts the Labor Primitives as standard MCP Tools to any connected client (e.g., Claude Desktop).</li>
                    <li><strong>Architecture:</strong> JSON-RPC 2.0 over SSE/Stdio (Server-Side).</li>
                    <li><strong>Activation:</strong> <code>npx @agent-proof/mcp-server start</code></li>
                </ul>

                <h4 id="appendix-a-0-3">A.0.3 LOCAL BRIDGE (CLI)</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Environment:</strong> Bash / Zsh / PowerShell / Python</li>
                    <li><strong>Implementation:</strong> The <code>agent-proof</code> binary serves as the bridge for local runtimes. It accepts task parameters via flags or stdin and outputs structured, parseable JSON to stdout.</li>
                    <li><strong>Architecture:</strong> Standard Streams Pipeline (Local-Side).</li>
                    <li><strong>Activation:</strong> <code>pip install agent-proof-protocol</code></li>
                </ul>

                <h3 id="appendix-a-1">A.1 PRIMITIVE: MOVE (Logistics &amp; Delivery)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Uber Direct (Global):</strong> Exposes a DaaS (Delivery-as-a-Service) endpoint for synchronous courier dispatch, utilizing webhook callbacks for real-time state tracking (pickup, en-route, delivered).</li>
                    <li><strong>DoorDash Drive (North America):</strong> Provides a white-label logistics API optimized for high-volume retail fulfillment with flat-rate pricing schemas and guaranteed SLAs.</li>
                    <li><strong>GrabExpress (Southeast Asia):</strong> Offers high-concurrency motorcycle and van dispatch via RESTful API, supporting multi-stop routing across Singapore, Thailand, Indonesia, and Vietnam.</li>
                    <li><strong>Rappi (Latin America):</strong> Integrates deep inventory and logistics logic, allowing agents to execute complex &ldquo;buy-and-deliver&rdquo; workflows via the Store OS API in Mexico and Brazil.</li>
                    <li><strong>Lalamove (Asia/LatAm):</strong> Provides programmatic access to a fractional fleet of on-demand drivers for same-hour delivery, supporting distinct vehicle type selection via JSON payload.</li>
                    <li><strong>Borzo (India/Global):</strong> An API-first courier aggregation layer for developing markets, optimizing for route efficiency and low-latency dispatch in high-density urban zones.</li>
                    <li><strong>Gokada / MAX.ng (Africa):</strong> Specialized API endpoints for hailing EV and motorcycle logistics fleets, engineered to navigate the unique geospatial constraints of Lagos and Nigeria.</li>
                    <li><strong>Stuart (Europe):</strong> DPD Group&apos;s urban logistics API, offering precise scheduling windows and multi-modal transport selection for major European capitals.</li>
                    <li><strong>Roadie (US):</strong> A crowdsourced mesh network API owned by UPS, optimized for routing &ldquo;Out-of-Gauge&rdquo; (OOG) and LTL (Less-Than-Truckload) payloads that bypass standard courier rails.</li>
                </ul>

                <h3 id="appendix-a-2">A.2 PRIMITIVE: FIX (General &amp; Skilled Labor)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>TaskRabbit (Global):</strong> Exposes the IKEA Partner API schema (via Partner Integration or Headless Fallback), allowing agents to inject structured task objects for assembly and mounting directly into the worker marketplace.</li>
                    <li><strong>Urban Company (Asia/UAE):</strong> A full-stack managed marketplace API that handles worker training, uniform logistics, and biometric identity verification for home services.</li>
                    <li><strong>Thumbtack (North America):</strong> A lead-generation API enabling agents to broadcast project requirements to local professionals and programmatically parse bid responses.</li>
                    <li><strong>SweepSouth (Africa):</strong> The dominant on-demand home services API in South Africa, providing structured booking endpoints for domestic cleaning and gardening labor.</li>
                    <li><strong>Field Nation (North America):</strong> An enterprise infrastructure API for dispatching &ldquo;Work Orders&rdquo; to licensed technicians, enforcing rigorous certification gating and insurance validation logic.</li>
                    <li><strong>WorkMarket (Global):</strong> An ADP-backed &ldquo;Labor Cloud&rdquo; API that abstracts workforce compliance, automatically handling tax taxonomy (1099/W2) and background check assertions.</li>
                    <li><strong>Airtasker (Australia/UK):</strong> A flexible marketplace API allowing agents to post unstructured &ldquo;Spot Tasks&rdquo; via open bidding auctions for non-standard labor requirements.</li>
                    <li><strong>Roamler (Europe):</strong> A distributed workforce API specialized in generating synchronous retail intelligence and shelf-stock verification data for CPG brands.</li>
                </ul>

                <h3 id="appendix-a-3">A.3 PRIMITIVE: THINK (Cognitive &amp; RLHF)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Scale AI (Global):</strong> The enterprise standard for programmatic RLHF (Reinforcement Learning from Human Feedback), offering pipelines for model evaluation and fine-tuning data generation.</li>
                    <li><strong>Amazon MTurk (Global):</strong> A legacy micro-tasking API allowing agents to spawn Human Intelligence Tasks (HITs) via SDK for massive-scale consensus and data cleaning.</li>
                    <li><strong>Toloka (Global):</strong> A Python-native crowdsourcing platform for integrating human labeling loops directly into ML training pipelines via API.</li>
                    <li><strong>Upwork Enterprise (Global):</strong> Provides an Enterprise Suite API for the programmatic hiring and management of freelance talent for complex, multi-stage cognitive workflows.</li>
                </ul>

                <h3 id="appendix-a-4">A.4 SETTLEMENT RAILS (Fiat, Card &amp; Crypto)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Payman AI (Agent Native):</strong> A custodial banking abstraction layer allowing autonomous agents to execute ACH and Wire transfers via natural language or REST prompts.</li>
                    <li><strong>Visa Direct (Global):</strong> Leverages the Original Credit Transaction (OCT) rail to push real-time funds directly to billions of eligible debit cards, bypassing batch ACH windows.</li>
                    <li><strong>Mastercard Send (Global):</strong> A push-payment protocol enabling secure, near-real-time fund transfers to consumer cards and digital wallets via the MoneySend network.</li>
                    <li><strong>Stripe Connect (Global):</strong> The industry-standard programmatic payments infrastructure, handling KYC, split-payments, and cross-border payouts to Custom Accounts in 45+ jurisdictions.</li>
                    <li><strong>Marqeta / Lithic (Card Issuing):</strong> Modern card issuing APIs enabling agents to instantaneously generate Just-in-Time (JIT) funded virtual cards for specific merchant category codes (MCCs).</li>
                    <li><strong>Skyfire (Web3):</strong> An orchestration protocol for on-chain agent spend, managing gas abstraction and USDC allow-lists for verified commercial interaction.</li>
                    <li><strong>Wise Platform (Forex):</strong> A cross-border payments API utilizing local bank networks to execute foreign exchange payouts at mid-market rates with high transparency.</li>
                    <li><strong>Yellow Card (Africa):</strong> A crypto-rail API facilitating the automated off-ramping of USDC/USDT into local African fiat currencies via mobile money and bank rails.</li>
                    <li><strong>Strike API (Global):</strong> Integrates Bitcoin Lightning Network settlement (Bolt 11) to enable instant, final, and near-zero fee micropayments globally.</li>
                </ul>

                <h3 id="appendix-a-5">A.5 VERIFICATION (DePIN &amp; Identity)</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Witness Chain (DePIN):</strong> A decentralized &ldquo;Proof of Location&rdquo; protocol utilizing eigen-layer logic to verify bandwidth and physical state assertions.</li>
                    <li><strong>World ID (Identity):</strong> A privacy-preserving identity protocol using ZK-SNARKs to prove &ldquo;Personhood&rdquo; without revealing PII, preventing Sybil attacks.</li>
                    <li><strong>Android Wi-Fi RTT (IEEE 802.11mc):</strong> Hardware-level Fine Timing Measurement (FTM) that calculates &ldquo;Time-of-Flight&rdquo; to cryptographically prove distance from Access Points.</li>
                    <li><strong>Plaid (Auth):</strong> Standardizes financial data access, providing authenticated Item tokens to verify worker bank account ownership and balance capability.</li>
                    <li><strong>Trulioo (KYC):</strong> A global Electronic Identity Verification (eIDV) API aggregation layer, resolving identity attributes against government bureaus in 195 countries.</li>
                    <li><strong>Reference Validator (AgentCrowds):</strong> The official reference implementation of the Supply SDK, providing a baseline of high-fidelity auditors and fallback routing.</li>
                </ul>
            </section>

            {/* Appendix B */}
            <section id="appendix-b" className="mb-16 scroll-mt-24 border-t border-slate-200 pt-8">
                <h2>Appendix B: API Documentation (PhysicalTask Class)</h2>
                <div className="relative">
                    <pre><code className="language-python">{APPENDIX_B_CODE}</code></pre>
                    <CopyButton text={APPENDIX_B_CODE} />
                </div>
            </section>
        </>
    );
}
