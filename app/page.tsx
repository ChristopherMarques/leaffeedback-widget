import React from "react";
import { SignInButton } from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-2">Welcome to the Feedback App</h1>
      {userId ? (
        <Button asChild>
          <Link href="/dashboard" className="text-white font-bold">
            Go to dashboard
          </Link>
        </Button>
      ) : (
        <SignInButton mode="modal">
          <Button className="text-white font-bold">Sign in with Google</Button>
        </SignInButton>
      )}
    </div>
  );
}
