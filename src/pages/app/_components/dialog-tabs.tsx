import React from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from "@/components";
import { Note } from "@/types";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export const DialogTabs: React.FC<
  Pick<Note, "audioTranscription" | "content">
> = ({ content, audioTranscription }) => {
  const copyText = (text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <Tabs className="space-y-4" defaultValue="notes">
      <TabsList className="rounded-l-full rounded-r-full">
        <TabsTrigger className="rounded-l-full rounded-r-full" value="notes">
          Notes
        </TabsTrigger>
        <TabsTrigger
          className="rounded-l-full rounded-r-full"
          value="transcript"
        >
          Transcript
        </TabsTrigger>
        <TabsTrigger className="rounded-l-full rounded-r-full" value="create">
          Create
        </TabsTrigger>
        <TabsTrigger
          className="rounded-l-full rounded-r-full"
          value="speaker_transcript"
        >
          Speaker Transcript
        </TabsTrigger>
      </TabsList>

      <TabsContent
        className="border rounded-2xl p-4 flex flex-col gap-4"
        value="notes"
      >
        <p>{content}</p>
        <Button
          onClick={() => {
            copyText(content);
          }}
          className="ml-auto"
          size={"icon"}
          variant={"ghost"}
        >
          <Copy />
        </Button>
      </TabsContent>
      <TabsContent
        className="border rounded-2xl p-4 flex flex-col gap-4"
        value="transcript"
      >
        <p>{audioTranscription}</p>
        <Button
          onClick={() => {
            copyText(audioTranscription);
          }}
          className="ml-auto"
          size={"icon"}
          variant={"ghost"}
        >
          <Copy />
        </Button>
      </TabsContent>
    </Tabs>
  );
};
