import { NoteCard } from "@/components";
import { fetcher } from "@/lib/utils";
import { Note } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: response } = useQuery<{ notes: Note[] }>({
    queryKey: ["notes"],
    queryFn: () => fetcher("/notes", "GET"),
  });

  const notes = response?.notes || [];

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-full h-full gap-4 flex flex-wrap overflow-x-hidden overflow-y-auto"
    >
      {notes.length > 0 ? (
        <>
          {notes.map((note) => (
            <NoteCard {...note} key={`note-${note._id}`} />
          ))}
        </>
      ) : (
        <h2 className="text-base text-muted-foreground w-full text-center">
          No notes found!
        </h2>
      )}
    </div>
  );
}
