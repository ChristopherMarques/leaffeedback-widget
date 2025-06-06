"use client";

import { Toaster } from "@/components/ui/toaster";
import React, { PropsWithChildren } from "react";
import { SubscriptionProvider } from "@/contexts/subscription-context";
import Logout from "@/components/Logout";
import { LanguageToggle } from "@/components/Global";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SubscriptionProvider>
      <Toaster />
      <div className="flex flex-col h-screen w-screen overflow-auto">
        <header className="p-4 flex justify-end">
          <LanguageToggle />
          <Logout />
        </header>
        {children}
      </div>
    </SubscriptionProvider>
  );
};

export default MainLayout;
