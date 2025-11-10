import { publicProcedure, createTRPCrouter } from "./server";

export const trpcRouter = createTRPCrouter({
  hello: publicProcedure.query(() => {
    return { message: "Hello from tRPC!" };
  }),
});

export type TRPCRouter = typeof trpcRouter;
