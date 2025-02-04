import React from "react";

import { Pen } from "lucide-react";
import {
  DialogHeader as Header,
  DialogTitle,
  DialogDescription,
  Button,
} from "@/components";

export const DialogHeader: React.FC<{ title: string; createdAt: Date }> = ({
  title,
  createdAt,
}) => {
  return (
    <Header>
      <DialogTitle className="flex gap-2 items-center">
        {title}
        <Button size={"icon"} variant={"ghost"}>
          <Pen className="text-muted-foreground size-5" />
        </Button>
      </DialogTitle>
      <DialogDescription className="text-sm text-muted-foreground font-medium">
        {new Date(createdAt).toDateString()}
      </DialogDescription>
    </Header>
  );
};
