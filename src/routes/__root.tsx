import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <main className="mx-auto h-screen w-full max-w-screen-2xl p-6">
        <Outlet />
      </main>
    </React.Fragment>
  );
}
