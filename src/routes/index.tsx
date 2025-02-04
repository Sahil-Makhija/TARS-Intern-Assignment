import { createFileRoute, redirect } from "@tanstack/react-router";

import { verifyJWT } from "@/lib/verify-jwt";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad: async () => {
    if (await verifyJWT()) {
      throw redirect({ to: "/app" });
    } else {
      throw redirect({ to: "/auth/sign-in" });
    }
  },
});

function RouteComponent() {
  return <></>;
}
