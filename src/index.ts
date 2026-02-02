import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

console.log('Agent Proof Protocol (APP) v2.1 [Universal Aggregator] Initialized.');
console.log('Genesis Timestamp: Feb 1, 2026. Architect: Roger Kwasi Senam Mensah.');

const server = new Server({
  name: "Agent-Proof-Gateway",
  version: "2.1.0"
}, {
  capabilities: {
    tools: {}
  }
});

// The 5 Labor Primitives
const PRIMITIVES = ["VERIFY", "FIX", "MAINTAIN", "MOVE", "THINK"] as const;

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: "dispatch_task",
      description: "Universal Dispatch: Hire human labor for any physical or digital task.",
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
    }]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "dispatch_task") throw new Error("Tool not found");

  const args = request.params.arguments as any;
  const primitive = args.primitive;

  // FAIL-SAFE ROUTING LOGIC v2.1
  let provider = "Unknown";
  let network_layer = "Layer 3 (Public)";

  // ROUTING RULE 1: Native Swarm (High Margin)
  // We keep 'VERIFY' tasks in-house for CashFundHer/AmericanCrowds
  if (primitive === "VERIFY") {
    provider = "Native Swarm (AmericanCrowds User #992)";
    network_layer = "Layer 1 (Proprietary)";
  }
  // ROUTING RULE 2: Aggregator Bridge (Guaranteed Liquidity)
  // We route skilled labor to partners
  else if (primitive === "FIX") {
    provider = "Partner API (TaskRabbit via Aggregator)";
    network_layer = "Layer 2 (Partner Bridge)";
  } else if (primitive === "MOVE") {
    provider = "Partner API (Uber Direct)";
    network_layer = "Layer 2 (Partner Bridge)";
  } else if (primitive === "MAINTAIN") {
    provider = "Partner API (Field Nation)";
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
        fee_estimated: args.constraints?.budget || "Market Rate",
        timestamp: new Date().toISOString()
      }, null, 2)
    }]
  };
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

run().catch(console.error);
