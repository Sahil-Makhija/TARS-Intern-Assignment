import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QueryProvider, Toaster } from "@/components";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <QueryProvider>
        <main className="mx-auto h-screen w-full max-w-screen-2xl p-6">
          <Toaster />
          <Outlet />
        </main>
      </QueryProvider>
    </React.Fragment>
  );
}
