import { NoteCard } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-full h-full gap-4 flex flex-wrap overflow-x-hidden overflow-y-auto"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <NoteCard key={i} />
      ))}
    </div>
  );
}
