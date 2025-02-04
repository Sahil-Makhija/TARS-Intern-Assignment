import React from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components";

export const DialogTabs: React.FC = () => {
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
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="transcript">Change your password here.</TabsContent>
    </Tabs>
  );
};
