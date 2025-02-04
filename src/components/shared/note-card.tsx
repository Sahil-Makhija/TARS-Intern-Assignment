import { truncateText } from "@/lib/utils";
import { Edit, Ellipsis, FileStack, Trash } from "lucide-react";
import React from "react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "../ui";
import { Hint } from "./hint";
import { useNavigate } from "@tanstack/react-router";
import { Note } from "@/types";
import { API } from "@/api";
import { toast } from "sonner";
import { useRevalidate } from "@/hooks";

export const NoteCard: React.FC<Note> = ({
  content,
  title,
  createdAt,
  _id: id,
  // isFavorite,
}) => {
  const navigate = useNavigate();
  const openNoteDialog = () => {
    navigate({ to: "/app/$noteId", params: { noteId: id } });
  };

  const { revalidate } = useRevalidate();

  const deleteNote = async () => {
    const response = await API.DeleteNote({ noteId: id });
    if (response.success && response.data.status === true) {
      toast.success("Note deleted successfully!");
      revalidate("notes");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div
      onClick={openNoteDialog}
      className="flex bg-background cursor-pointer flex-col p-3 relative gap-3 border rounded-3xl w-64 h-80 overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground font-medium">
          {new Date(createdAt).toDateString()}
        </span>
      </div>
      <h5 className="text-base font-semibold">{title}</h5>
      <p className="text-sm text-muted-foreground ">
        {truncateText(content, 200)}
      </p>
      <div className="flex absolute bottom-2 right-2 gap-2 items-center p-1.5 rounded-l-full rounded-r-full bg-inherit text-muted-foreground">
        <Hint description="Copy to clipboard">
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            variant={"ghost"}
            size={"icon"}
          >
            <FileStack />
          </Button>
        </Hint>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              variant={"ghost"}
              size={"icon"}
            >
              <Ellipsis />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 flex flex-col gap-1 p-0.5">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=""
              variant={"ghost"}
            >
              <Edit /> Rename
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                deleteNote();
              }}
              variant={"ghost"}
            >
              <Trash /> Delete
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
