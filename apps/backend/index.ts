import { createBunServeHandler } from "trpc-bun-adapter";
import { appRouter } from "@repo/trpc";

Bun.serve(
  createBunServeHandler({
    router: appRouter,
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
