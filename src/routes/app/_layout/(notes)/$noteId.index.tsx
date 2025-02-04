import { createFileRoute } from "@tanstack/react-router";

import { Note } from "@/pages";

export const Route = createFileRoute("/app/_layout/(notes)/$noteId/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Note />
    </>
  );
}
