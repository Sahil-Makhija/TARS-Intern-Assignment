import React from "react";

import { Dialog, DialogContent } from "@/components";
import { DialogNavbar } from "./_components/dialog-navbar";
import { DialogHeader } from "./_components/dialog-header";
import { DialogTabs } from "./_components/dialog-tabs";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/utils";
import { toast } from "sonner";
import { Note as INote } from "@/types";

export const Note: React.FC = () => {
  const navigate = useNavigate();
  const { noteId } = useParams({ from: "/app/_layout/(notes)/$noteId/" });

  const { data, isSuccess, isLoading } = useQuery<{ note: INote }>({
    queryKey: [noteId],
    queryFn: () => fetcher(`/notes/${noteId}`, "GET"),
  });

  if (!isLoading && !isSuccess) {
    if (!data?.note) {
      toast.error("No note found with this id!");
      navigate({ to: "/app" });
    }
  }

  return (
    <Dialog
      modal
      open
      onOpenChange={() => {
        navigate({ to: "/app" });
      }}
    >
      <DialogContent className="h-[90%] overflow-x-hidden overflow-y-auto w-[60vw] max-w-full">
        <section className="flex flex-col h-full w-full gap-4">
          <DialogNavbar />
          <div className="flex flex-col gap-1">
            <DialogHeader
              createdAt={data?.note.createdAt as Date}
              title={data?.note.title as string}
            />
          </div>
          <DialogTabs
            content={data?.note.content as string}
            audioTranscription={data?.note.audioTranscription as string}
          />
        </section>
      </DialogContent>
    </Dialog>
  );
};
