import { redirect } from "@tanstack/react-router";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ArrowUpDown as SortIcon } from "lucide-react";

import { verifyJWT } from "@/lib/verify-jwt";
import { Button, Input, Sidebar, NoteInput, NewNoteModal } from "@/components";

export const Route = createFileRoute("/app/_layout")({
  component: RouteComponent,
  beforeLoad: async () => {
    if (!(await verifyJWT())) {
      throw redirect({ to: "/auth/sign-in" });
    }
  },
});

function RouteComponent() {
  return (
    <section className="h-full flex items-center gap-4 ">
      <NewNoteModal />
      <Sidebar />
      <div className="flex flex-col flex-grow h-full gap-4 relative">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search"
            className="rounded-l-full rounded-r-full h-10"
          />
          <Button className="h-10" variant={"secondary"} border={"rounded"}>
            <SortIcon />
            Sort
          </Button>
        </div>
        <div className="flex-grow max-h-full overflow-x-hidden overflow-y-auto">
          <Outlet />
        </div>
        <NoteInput />
      </div>
    </section>
  );
}
