import React from "react";

import { useNoteModal } from "@/hooks";
import { Dialog, DialogContent } from "../ui";

export const NewNoteModal: React.FC = () => {
  const { close, isOpen } = useNoteModal();
  return (
    <Dialog modal open={isOpen} onOpenChange={close}>
      <DialogContent className="h-[90%] overflow-x-hidden overflow-y-auto w-[60vw] max-w-full">
        <section className="flex flex-col h-full w-full gap-4">
          {/* <DialogNavbar /> */}
          <div className="flex flex-col gap-1">{/* <DialogHeader /> */}</div>
          {/* <DialogTabs /> */}
        </section>
      </DialogContent>
    </Dialog>
  );
};
