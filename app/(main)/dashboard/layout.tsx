import { Toaster } from "@/components/ui/toaster";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      <div className="flex flex-col h-screen w-screen">{children}</div>
    </>
  );
};

export default MainLayout;
