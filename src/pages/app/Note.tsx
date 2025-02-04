import React from "react";

import { Dialog, DialogContent } from "@/components";
import { DialogNavbar } from "./_components/dialog-navbar";
import { DialogHeader } from "./_components/dialog-header";
import { DialogTabs } from "./_components/dialog-tabs";

export const Note: React.FC = () => {
  return (
    // TODO: Add a close function to the onOpenChange prop
    <Dialog modal open onOpenChange={() => {}}>
      <DialogContent className="h-[90%] overflow-x-hidden overflow-y-auto w-[60vw] max-w-full">
        <section className="flex flex-col h-full w-full gap-4">
          <DialogNavbar />
          <div className="flex flex-col gap-1">
            <DialogHeader />
          </div>
          <DialogTabs />
        </section>
      </DialogContent>
    </Dialog>
  );
};
