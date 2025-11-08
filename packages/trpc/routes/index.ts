import { router, publicProcedure } from "../index.ts";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    return { status: 300 };
  }),
});

export type AppRouter = typeof appRouter;
