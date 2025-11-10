import { createTRPCReact } from "@trpc/react-query";
import type { TRPCRouter } from "./router.ts";

export const trpc = createTRPCReact<TRPCRouter>();
