# Agent Proof Protocol (APP) v2.4

![PyPI](https://img.shields.io/pypi/v/agent-proof-protocol?color=blue&style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Beta-orange?style=for-the-badge)
![Integration](https://img.shields.io/badge/Integrations-OpenClaw%20%7C%20CrewAI%20%7C%20LangChain-blueviolet?style=for-the-badge)

> **The "TCP/IP of Reality."**
> The Universal Settlement Layer enabling AI Agents to verify, fix, and move assets in the physical world.

---

## ⚡ What is this?

**Agent Proof Protocol (APP)** is an open-source standard that connects Autonomous AI Agents to physical labor and verification networks. It solves the "Hallucination of Action" problem by enforcing **Proof of Physics** (Wi-Fi RTT, Bio-Liveness, Geofencing) before releasing funds.

It acts as a neutral middleware, aggregating execution APIs (Uber Direct, TaskRabbit, Field Nation) into a single, audit-ready standard compatible with:
* **Local Agents:** OpenClaw, AutoGPT (via CLI)
* **Cloud Agents:** CrewAI, LangChain, Claude Desktop (via MCP)
* **Web Agents:** Chrome/Gemini Nano (via WebMCP)

📄 **[Read the Full Whitepaper (v2.4)](./whitepaper/APP_Whitepaper_v2.4.md)** for architecture, economic thesis, and security specs.

---

## 📦 Installation

```bash
pip install agent-proof-protocol
```

---

## 🚀 Quick Start

### 1. The "Builder" (CLI / OpenClaw)

Perfect for sovereign agents running locally. Verify reality directly from your terminal.

```bash
# Verify if a store is actually open (Ground Truth)
agent-proof verify --location "Starbucks 5th Ave, NYC" --intent "Check line length"

# Output:
# {
#   "status": "VERIFIED",
#   "proof": "rtt_hash_8x99...",
#   "image_url": "https://api.agentcrowds.com/proof/8x99",
#   "metadata": {"line_length": "Short", "open": true}
# }
```

### 2. The "Suit" (Python SDK / CrewAI / LangChain)

Integrate physical skills into your existing agent swarm.

```python
from agent_proof import PhysicalTask

# 1. Create a Task (e.g., Fix a Server)
task = PhysicalTask.create(
    primitive="FIX",
    subtype="IT_REPAIR",
    location="Data Center B, Austin TX",
    budget=15000, # $150.00
    verification="RTT" # Require Wi-Fi Proof
)

# 2. Wait for Ground Truth (Blocking or Async)
print(f"Task dispatched! ID: {task.id}")
# The funds are held in Smart Escrow until the worker scans the server's Wi-Fi.
```

### 3. The "Cloud" (Model Context Protocol)

Run APP as an MCP Server to give Claude Desktop or remote LLMs physical hands.

```bash
npx @agent-proof/mcp-server start
```

Add this to your `claude_desktop_config.json` to enable "Physical Tools" in Claude.

---

## 🛠 Architecture: The Tri-State Model

We do not force you to adapt to us. The Protocol adapts to your Runtime.

| Runtime | Interface | Best For |
|---|---|---|
| **Local** (Sovereign) | `agent-proof` Binary (CLI) | OpenClaw, AutoGPT, Shell Scripts |
| **Cloud** (Enterprise) | Model Context Protocol (MCP) | CrewAI, LangChain, Claude, OpenAI |
| **Web** (Browser) | WebMCP (`navigator.modelContext`) | Chrome Agents, Gemini Nano |

---

## 🛡 Security & Privacy

- **Zero-Trust Egress:** Enterprise users can configure `base_url` to point to private gateways.
- **On-Device Anonymization:** Images are processed at the edge. Faces/PII are blurred before transmission.
- **Sandbox Mode:** Pass `sandbox=True` to simulate physical completion without dispatching humans or spending crypto.

---

## 🤝 Contributing

We are building the standard for the Agentic Economy.

- **Submit Adapters:** Help us connect more labor networks (DoorDash, Rappi, etc.).
- **Improve Bridges:** Help us build better integrations for LangChain and AutoGen.

See `CONTRIBUTING.md` for details.

---

## 📜 License

MIT Open Source.

Created by **Roger Kwasi Senam Mensah**.
