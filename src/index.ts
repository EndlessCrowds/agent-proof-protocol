import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

// The Genesis Timestamp
console.log('Agent Proof Protocol (APP) Genesis: February 1, 2026. Strategy: The Endless Crowds Trust Shield. Architect: Roger Mensah.');

// Create server instance
const server = new Server(
  {
    name: "Agent-Proof-Gateway",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define the verify_agent_liveness tool
const TOOL_NAME = "verify_agent_liveness";

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: TOOL_NAME,
        description: "Verifies the liveness and personhood of an agent/brand.",
        inputSchema: z.object({
          brand_id: z.string().describe("The ID of the brand to verify"),
          agent_id: z.string().describe("The ID of the agent to verify"),
        }).shape, // Use .shape for zod object to get the properties schema
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== TOOL_NAME) {
    throw new Error("Tool not found");
  }

  const { brand_id, agent_id } = request.params.arguments as { brand_id: string; agent_id: string };

  // Logic to verify (Mocked as per requirements)
  // verify_agent_liveness should accept brand_id and agent_id and return the specific JSON.
  
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({
          status: 'verified',
          proof_type: 'Humanode-Liveness',
          trust_tier: 'Level 2 - Standard',
          network: 'Endless Crowds Ecosystem',
          note: 'Verified via Agent Proof Protocol Gateway'
        }, null, 2),
      },
    ],
  };
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Agent Proof Gateway running on stdio");
}

run().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
