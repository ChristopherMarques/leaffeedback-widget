import { Toaster } from "@/components/ui/toaster";
import React, { PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      <div className="flex flex-col h-screen w-screen">
        <header className="p-4 flex justify-end">
          <UserButton afterSignOutUrl="/" />
        </header>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
