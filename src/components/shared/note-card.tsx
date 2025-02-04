import { truncateText } from "@/lib/utils";
import { Edit, Ellipsis, FileStack, Trash } from "lucide-react";
import React from "react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "../ui";
import { Hint } from "./hint";
import { useNavigate } from "@tanstack/react-router";

export const NoteCard: React.FC = () => {
  const navigate = useNavigate();
  const openNoteDialog = () => {
    navigate({ to: "/app/$noteId", params: { noteId: "noteId" } });
  };
  return (
    <div
      onClick={openNoteDialog}
      className="flex bg-background cursor-pointer flex-col p-3 relative gap-3 border rounded-3xl w-64 h-80 overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground font-medium">
          Jan 30, 2025 5:26 PM
        </span>
      </div>
      <h5 className="text-base font-semibold">Engineering Assignment audio</h5>
      <p className="text-sm text-muted-foreground ">
        {truncateText(
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          200
        )}
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
              }}
              className=""
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
