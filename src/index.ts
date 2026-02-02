import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

// Genesis Log - Stealth Mode
console.log('Agent Proof Protocol (APP) v2.1 [Universal Aggregator] Initialized.');
console.log('Genesis Timestamp: Feb 1, 2026. Architect: Roger Kwasi Senam Mensah.');

const server = new Server({ name: "Agent-Proof-Gateway", version: "2.1.0" }, { capabilities: { tools: {} } });

// The 5 Labor Primitives
const PRIMITIVES = ["VERIFY", "FIX", "MAINTAIN", "MOVE", "THINK"] as const;

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "dispatch_task",
        description: "Universal Dispatch: Hire human labor for any physical or digital task via the Agent Proof Protocol.",
        inputSchema: z.object({
          primitive: z.enum(PRIMITIVES).describe("The type of labor required (VERIFY, FIX, MOVE, MAINTAIN, THINK)"),
          intent: z.string().describe("Natural language description of the task"),
          location: z.object({
            lat: z.number(),
            long: z.number()
          }).describe("Geospatial coordinates"),
          constraints: z.object({
            budget: z.number(),
            provider_preference: z.array(z.string()).optional()
          }).optional()
        }).shape
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "dispatch_task") throw new Error("Tool not found");

  const args = request.params.arguments as any;
  const primitive = args.primitive;

  // FAIL-SAFE ROUTING LOGIC v2.1 (Aggregator Mode)
  let provider = "Unknown";
  let network_layer = "Layer 3 (Public Surge)";
  let estimated_cost = args.constraints?.budget || "Market Rate";

  // ROUTING RULE 1: Native Swarm (High Margin / Internal)
  // We keep 'VERIFY' tasks internal to the AgentCrowds Network
  if (primitive === "VERIFY") {
    provider = "AgentCrowds Native Swarm (Tier 1 Node)";
    network_layer = "Layer 1 (Proprietary)";
  }
  // ROUTING RULE 2: Aggregator Bridge (Partner APIs)
  // We route skilled/logistics tasks to external partners
  else if (primitive === "FIX") {
    provider = "Partner API (TaskRabbit/Angi Aggregation)";
    network_layer = "Layer 2 (Partner Bridge)";
  }
  else if (primitive === "MOVE") {
    provider = "Partner API (Uber Direct/DoorDash)";
    network_layer = "Layer 2 (Partner Bridge)";
  }
  else if (primitive === "MAINTAIN") {
    provider = "Partner API (Field Nation/WorkMarket)";
    network_layer = "Layer 2 (Partner Bridge)";
  }
  else if (primitive === "THINK") {
    provider = "Partner API (Scale AI/MTurk)";
    network_layer = "Layer 2 (Partner Bridge)";
  }

  return {
    content: [{
      type: "text",
      text: JSON.stringify({
        status: "DISPATCHED",
        primitive: primitive,
        provider: provider,
        layer: network_layer,
        fee_estimated: estimated_cost,
        timestamp: new Date().toISOString(),
        note: "Task routed via Agent Proof Protocol Fail-Safe Engine."
      }, null, 2)
    }]
  };
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
run().catch(console.error);
