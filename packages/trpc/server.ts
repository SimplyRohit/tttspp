import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const createTRPCrouter = t.router;
export const publicProcedure = t.procedure;
