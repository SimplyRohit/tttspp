"use client";
import { trpc } from "@repo/trpc/client";

export default function Home() {
  const hello = trpc.hello.useQuery();

  // ===== DATA STATES =====
  console.log(hello.data); // The actual data returned from query
  console.log(hello.error); // Error object if query failed
  console.log(hello.status); // 'pending' | 'error' | 'success'

  // ===== LOADING STATES =====
  console.log(hello.isLoading); // true on first load (no cached data)
  console.log(hello.isFetching); // true whenever fetching (including refetch)
  console.log(hello.isPending); // true while query is pending
  console.log(hello.isRefetching); // true when refetching with cached data

  // ===== SUCCESS/ERROR STATES =====
  console.log(hello.isSuccess); // true if query succeeded
  console.log(hello.isError); // true if query failed

  // ===== DATA AVAILABILITY =====
  console.log(hello.isFetched); // true if query has been fetched
  console.log(hello.isStale); // true if data is stale
  console.log(hello.isPlaceholderData); // true if showing placeholder data

  // ===== REFETCH CONTROL =====
  console.log(hello.refetch); // Function to manually refetch
  // ===== TIMING INFO =====
  console.log(hello.dataUpdatedAt); // Timestamp of last successful data update
  console.log(hello.errorUpdatedAt); // Timestamp of last error
  console.log(hello.failureCount); // Number of failed attempts
  console.log(hello.failureReason); // Reaso
  return (
    <div className="flex min-h-screen text-white items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button>Hii</button>
    </div>
  );
}
