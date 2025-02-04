import React from "react";

import { Pen } from "lucide-react";
import {
  DialogHeader as Header,
  DialogTitle,
  DialogDescription,
  Button,
} from "@/components";

export const DialogHeader: React.FC = () => {
  return (
    <Header>
      <DialogTitle className="flex gap-2 items-center">
        Engineering Assignment audio
        <Button size={"icon"} variant={"ghost"}>
          <Pen className="text-muted-foreground size-5" />
        </Button>
      </DialogTitle>
      <DialogDescription className="text-sm text-muted-foreground font-medium">
        Jan 30, 2025 5:26 PM
      </DialogDescription>
    </Header>
  );
};
