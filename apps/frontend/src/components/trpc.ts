import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@repo/trpc";

// 1. Create the React bindings
export const trpc = createTRPCReact<AppRouter>();

// 2. Export a helper for client creation
export function createTRPCClient() {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/trpc", // Bun backend URL
      }),
    ],
  });
}
