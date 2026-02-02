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

// Define Tool Names
const VERIFY_TOOL = "verify_agent_liveness";
const DISPATCH_TOOL = "dispatch_verification_task";

// Mock Helper Functions for Priority Logic
function checkNativeSensors(lat: number, long: number): { found: boolean; provider?: string; cost?: string } {
  // Simulated check: Verifying if a "CashFundHer", "AmericanCrowds", or "AnytimeAfrica" user is within 1 mile
  // Step 1: Mocking the check for Native Ecosystem (Priority 1)
  console.error(`[Native Scan] Searching for AmericanCrowds/CashFundHer/AnytimeAfrica users near ${lat}, ${long}...`);

  // For demonstration, we simulate finding a user 80% of the time, or we can force it to true/false based on logic.
  // The requirement says: "Write a function checkNativeSensors(lat, long) that mocks finding a user within 1 mile."
  // We will default to true for the "Happy Path" user experience.
  return {
    found: true,
    provider: 'AnytimeAfrica User (ID: ata_991)',
    cost: '$10.00'
  };
}

function checkDePINLayer(): { found: boolean; provider?: string; cost?: string } {
  // Step 2: Mocking the check for DePIN Layer (Priority 2)
  console.error(`[DePIN Scan] Pinging Helium/Hivemapper sensors...`);
  return {
    found: true,
    provider: 'DePIN Node (Hex: 88283082)',
    cost: '$0.50'
  };
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: VERIFY_TOOL,
        description: "Verifies the liveness and personhood of an agent/brand.",
        inputSchema: z.object({
          brand_id: z.string().describe("The ID of the brand to verify"),
          agent_id: z.string().describe("The ID of the agent to verify"),
        }).shape,
      },
      {
        name: DISPATCH_TOOL,
        description: "Dispatches a physical verification task to the Agent Proof Verified Network.",
        inputSchema: z.object({
          latitude: z.number().describe("Target latitude"),
          longitude: z.number().describe("Target longitude"),
          task_description: z.string().describe("What needs to be verified?"),
          bid_amount: z.number().describe("Amount offered for the task"),
        }).shape,
      }
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === VERIFY_TOOL) {
    // Existing Verification Logic
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
  }

  if (request.params.name === DISPATCH_TOOL) {
    const { latitude, longitude, task_description, bid_amount } = request.params.arguments as { latitude: number; longitude: number; task_description: string; bid_amount: number };

    // Priority 1: Native Ecosystem Check (AmericanCrowds / CashFundHer)
    const nativeCheck = checkNativeSensors(latitude, longitude);
    if (nativeCheck.found) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: 'dispatched',
            priority_level: 'Native Ecosystem (Highest)',
            layer: 'Layer 1 - AmericanCrowds',
            provider: nativeCheck.provider,
            estimated_cost: nativeCheck.cost,
            task: task_description
          }, null, 2)
        }]
      };
    }

    // Priority 2: DePIN Layer Backup
    const depinCheck = checkDePINLayer();
    if (depinCheck.found) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: 'dispatched',
            priority_level: 'DePIN Network',
            layer: 'Layer 2 - DePIN Backup',
            provider: depinCheck.provider,
            estimated_cost: depinCheck.cost,
            task: task_description
          }, null, 2)
        }]
      };
    }

    // Priority 3: Commercial Gig Dispatch (Fail-Safe Guarantee)
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          status: 'dispatched',
          priority_level: 'Gig Economy Fail-Safe',
          layer: 'Layer 3 - Commercial Gig Rail',
          provider: 'Uber Direct / DoorDash Drive',
          estimated_cost: `$${(bid_amount * 1.5).toFixed(2)} (Surge Applied)`, // Mocking a higher cost
          task: task_description
        }, null, 2)
      }]
    };
  }

  throw new Error("Tool not found");
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
