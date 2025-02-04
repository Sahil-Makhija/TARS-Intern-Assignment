import React, { useState } from "react";

import { useNoteModal, useRevalidate } from "@/hooks";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Form,
  Separator,
} from "@/components/ui";
import { Check, Pen, X } from "lucide-react";
import {
  NoteTitleField,
  TextNoteField,
  textNoteValidations,
  titleValidations,
  TranscriptField,
  transcriptValidations,
} from "../form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { fetcher } from "@/lib/utils";
import { Note } from "@/types";
import { toast } from "sonner";

const NoteSchema = z.object({
  ...titleValidations,
  ...textNoteValidations,
  ...transcriptValidations,
});

export type NoteModel = z.infer<typeof NoteSchema>;

export const NewNoteModal: React.FC = () => {
  const { close, isOpen } = useNoteModal();
  const { revalidate } = useRevalidate();

  const { mutate: create } = useMutation({
    mutationFn: (
      note: Pick<Note, "content" | "title" | "audioTranscription" | "images">
    ) => fetcher("/notes/create", "POST", { ...note }),
    onSuccess: () => {
      toast.success("Note created successfully!");
      revalidate("notes");
      close();
    },
    onError: () => {
      toast.error("Couldn't create note!");
    },
  });

  const form = useForm<NoteModel>({
    mode: "onSubmit",
    defaultValues: { title: "Untitled", content: "", audioTranscription: "" },
    resolver: zodResolver(NoteSchema),
  });

  const [editingTitle, setEditingTitle] = useState(false);
  const onSubmit: SubmitHandler<NoteModel> = async (note) => {
    create({ ...note, images: [] });
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={close}>
      <DialogContent className="h-[90%] overflow-x-hidden overflow-y-hidden w-[60vw] max-w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <section className="flex flex-col h-full w-full gap-4">
              <div className="flex w-full items-center justify-between">
                <Button
                  onClick={close}
                  variant={"secondary"}
                  size={"icon"}
                  border={"circle"}
                >
                  <X />
                </Button>
                <Button variant={"secondary"} border={"rounded"}>
                  Share
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <DialogHeader>
                  {editingTitle ? (
                    <NoteTitleField hideLabel />
                  ) : (
                    <DialogTitle className="flex gap-2 items-center">
                      {form.getValues("title")}
                    </DialogTitle>
                  )}
                </DialogHeader>
                <Button
                  onClick={() => {
                    setEditingTitle((prev) => !prev);
                  }}
                  size={"icon"}
                  variant={"ghost"}
                >
                  {editingTitle ? (
                    <Check className="text-muted-foreground size-5" />
                  ) : (
                    <Pen className="text-muted-foreground size-5" />
                  )}
                </Button>
              </div>
              <Separator />
              <div className="flex flex-col gap-3">
                <TranscriptField />
              </div>
              <Separator />
              <div className="flex flex-col gap-3">
                <TextNoteField />
              </div>
              <Button type="submit" className="w-max">
                Create note
              </Button>
            </section>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
