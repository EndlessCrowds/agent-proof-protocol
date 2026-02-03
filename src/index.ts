import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

import * as Verify from "./primitives/verify.js";
import * as Fix from "./primitives/fix.js";
import * as Maintain from "./primitives/maintain.js";
import * as Move from "./primitives/move.js";
import * as Think from "./primitives/think.js";

// Genesis Log - Stealth Mode
console.log('Agent Proof Protocol (APP) v2.1 [Universal Aggregator] Initialized.');
console.log('Genesis Timestamp: Feb 1, 2026. Architect: Roger Kwasi Senam Mensah.');

const server = new Server({ name: "Agent-Proof-Gateway", version: "2.1.0" }, { capabilities: { tools: {} } });

// The 5 Labor Primitives
const PRIMITIVES = [
  Verify.PRIMITIVE_NAME,
  Fix.PRIMITIVE_NAME,
  Maintain.PRIMITIVE_NAME,
  Move.PRIMITIVE_NAME,
  Think.PRIMITIVE_NAME
] as const;

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
  const estimated_cost = args.constraints?.budget || "Market Rate";

  if (primitive === Verify.PRIMITIVE_NAME) {
    provider = Verify.PROVIDER;
    network_layer = "Layer 1 (Proprietary)";
  } else if (primitive === Fix.PRIMITIVE_NAME) {
    provider = Fix.PROVIDER;
    network_layer = "Layer 2 (Partner Bridge)";
  } else if (primitive === Move.PRIMITIVE_NAME) {
    provider = Move.PROVIDER;
    network_layer = "Layer 2 (Partner Bridge)";
  } else if (primitive === Maintain.PRIMITIVE_NAME) {
    provider = Maintain.PROVIDER;
    network_layer = "Layer 2 (Partner Bridge)";
  } else if (primitive === Think.PRIMITIVE_NAME) {
    provider = Think.PROVIDER;
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
