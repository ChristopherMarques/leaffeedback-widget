"use client";

import { Toaster } from "@/components/ui/toaster";
import React, { PropsWithChildren } from "react";
import { UserButton } from "@clerk/nextjs";
import { SubscriptionProvider } from "@/contexts/subscription-context";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SubscriptionProvider>
      <Toaster />
      <div className="flex flex-col h-screen w-screen overflow-auto">
        <header className="p-4 flex justify-end">
          <UserButton signInUrl="/sign-in" />
        </header>
        {children}
      </div>
    </SubscriptionProvider>
  );
};

export default MainLayout;
