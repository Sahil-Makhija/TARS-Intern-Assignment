import { createFileRoute, Outlet } from "@tanstack/react-router";

import backgroundImage from "@/assets/backgroundImage.jpg";

export const Route = createFileRoute("/auth/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full ">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background Image"
          className="absolute z-0 object-cover h-full object-center"
        />
      </div>
      <div className="flex flex-grow justify-center w-full h-full overflow-hidden">
        <div className=" flex flex-col w-full md:w-100 justify-center gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
