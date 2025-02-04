import React from "react";

import { useNoteModal } from "@/hooks";

import { Button } from "@/components";
import { SpeechInput } from "./speech-input";
import { Image, Pencil } from "lucide-react";

export const NoteInput: React.FC = () => {
  const { open } = useNoteModal();
  return (
    <div className="w-full h-max bg-background overflow-visible ">
      <div className="w-4/5 flex items-center justify-evenly py-2 px-4 h-16 rounded-l-full rounded-r-full shadow-lg mx-auto shadow-gray-700 gap-2 ">
        <Button
          onClick={open}
          variant={"ghost"}
          size={"icon"}
          border={"circle"}
        >
          <Pencil />
        </Button>
        <Button variant={"ghost"} size={"icon"} border={"circle"}>
          <Image />
        </Button>
        <div className="flex flex-grow"></div>
        <SpeechInput />
      </div>
    </div>
  );
};
