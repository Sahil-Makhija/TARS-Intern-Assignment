import { cn } from "@/lib/utils";
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside
      className={cn(
        "flex h-full flex-shrink-0 w-72 rounded-4xl flex-col overflow-y-auto border "
      )}
    ></aside>
  );
};
