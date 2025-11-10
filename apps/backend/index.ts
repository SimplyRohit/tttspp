import { createBunServeHandler } from "trpc-bun-adapter";
import { trpcRouter } from "@repo/trpc/server";

Bun.serve(
  createBunServeHandler({
    router: trpcRouter,
    endpoint: "/trpc",
    responseMeta() {
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
      };
    },
  }),
);

console.log("tRPC Bun server running on http://localhost:3000");
