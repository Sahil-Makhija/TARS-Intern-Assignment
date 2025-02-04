import React from "react";

import { Maximize2, Star, X } from "lucide-react";
import { Button } from "@/components";
import { useNavigate } from "@tanstack/react-router";
export const DialogNavbar: React.FC = () => {
  const navigate = useNavigate();
  const closeDialog = () => {
    navigate({ to: "/app" });
  };
  return (
    <div className="flex w-full items-center justify-between">
      <Button variant={"secondary"} size={"icon"} border={"circle"}>
        <Maximize2 />
      </Button>
      <div className="flex items-center gap-1">
        <Button variant={"secondary"} size={"icon"} border={"circle"}>
          <Star />
        </Button>
        <Button variant={"secondary"} border={"rounded"}>
          Share
        </Button>
        <Button
          onClick={closeDialog}
          variant={"secondary"}
          size={"icon"}
          border={"circle"}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};
