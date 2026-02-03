import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3161]/20 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-200">
            The Standard for Verifiable Agentic Trust
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Bridging the Trust Gap between AI Agents and Human Commerce.
          </p>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            The Three Pillars of Agentic Integrity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Identity */}
            <div className="p-8 border border-slate-800 bg-slate-900 hover:border-blue-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-900/30 flex items-center justify-center mb-6">
                <span className="text-blue-500 text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Identity Proof</h3>
              <p className="text-slate-400 leading-relaxed">
                Verifying the human anchor. We integrate biometric liveness and hardware-based attestation to ensure every agent answers to a legally liable principal.
              </p>
            </div>

            {/* Pillar 2: Intent */}
            <div className="p-8 border border-slate-800 bg-slate-900 hover:border-red-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-red-900/30 flex items-center justify-center mb-6">
                <span className="text-red-500 text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Intent Mandate</h3>
              <p className="text-slate-400 leading-relaxed">
                Cryptographically signed budget and scope constraints. Preventing "Agent Drift" by mathematically enforcing what an AI is authorized to do.
              </p>
            </div>

            {/* Pillar 3: Settlement */}
            <div className="p-8 border border-slate-800 bg-slate-900 hover:border-green-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-green-900/30 flex items-center justify-center mb-6">
                <span className="text-green-500 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Trust Gateway</h3>
              <p className="text-slate-400 leading-relaxed">
                The universal bridge for value. Seamlessly routing intent across Visa TAP, Google AP2, and decentralized Web3 payment rails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live API Console */}
      <section className="py-20 bg-black border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Side: Pitch */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">
                Integrated in Seconds
              </h2>
              <p className="text-slate-400 mb-6">
                The Agent Proof Protocol (APP) provides a standardized JSON interface for any AI Agent. No complex SDKs. No custom adapters. Just verifiable trust.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✓</span> MCP Server Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✓</span> Cross-Brand Identity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">✓</span> Automated Liveness Checks
                </li>
              </ul>
            </div>

            {/* Right Side: The Code Console */}
            <div className="flex-1 w-full">
              <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">verify_agent_liveness.json</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <p className="text-blue-400">// Request</p>
                  <pre className="text-slate-300 mb-4 whitespace-pre-wrap">
                    {`{
  "tool": "verify_agent_liveness",
  "arguments": {
    "brand_id": "AmericanCrowds",
    "agent_id": "agent_alpha_9"
  }
}`}
                  </pre>
                  <p className="text-green-400">// Response</p>
                  <pre className="text-slate-300 whitespace-pre-wrap">
                    {`{
  "status": "verified",
  "proof_type": "Humanode-Liveness",
  "trust_tier": "Level 2 - Standard",
  "network": "Endless Crowds Ecosystem",
  "note": "Verified via APP Gateway"
}`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Agentic Glossary */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter text-slate-300">Agentic Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Liveness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The cryptographic proof that a transaction is authorized by a living human, not a static spoof.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Intent Mandate</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mathematically enforceable constraints that prevent AI agents from exceeding their user-defined scope.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Trust Tiering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our 3-level verification system (Email → Liveness → Document) for risk management.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-wide">Gateway Interoperability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The ability for APP to translate intent between Visa TAP, Google AP2, and Web3 rails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners Badge */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 text-center relative overflow-hidden">
        {/* Vision Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          <div className="px-3 py-1 border border-blue-500/30 rounded-full bg-blue-900/10 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Road to 2040</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Ecosystem Partners</p>
          <div className="inline-flex items-center gap-4 px-6 py-3 border border-slate-800 rounded-full bg-slate-900/50">
            <span className="text-slate-300 font-semibold">Powered by</span>
            <span className="text-white font-bold tracking-tight">Endless Crowds</span>
          </div>
        </div>
      </section>

      {/* About the Architect */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-center">Engineered for Integrity</h2>
          <p className="text-slate-400 text-lg leading-relaxed text-center italic">
            "Led by Roger Mensah, a PMP-driven technologist specializing in the intersection of autonomous agents and human-centric commerce. With a foundation in multi-tenant architecture and a mission to solve the 'Trust Gap,' the Agent Proof Protocol is the cornerstone of the Endless Crowds Ecosystem."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A3161] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg tracking-tight">Agent Proof Protocol</p>
              <p className="text-blue-200 text-sm">Part of the Endless Crowds Network</p>
            </div>
            <div className="flex gap-8">
              <Link href="/blog" className="text-blue-100 hover:text-white transition-colors text-sm font-medium">Protocol Blog</Link>
              <a href="https://americancrowds.com" className="text-blue-100 hover:text-white transition-colors text-sm font-medium">AmericanCrowds.com</a>
              <a href="https://rogermensah.com" className="text-blue-100 hover:text-white transition-colors text-sm font-medium">RogerMensah.com</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-blue-200/60 text-xs">© 2026 Agent Proof Protocol. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
