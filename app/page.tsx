"use client";

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User } from "@/lib/types";
import { setCookie } from "cookies-next";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider).finally(() => {
      router.push("/dashboard");
    });
    const user: Partial<User> | null = result.user
      ? (result.user as Partial<User>)
      : null;

    setCookie("token", user?.accessToken || "");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-2">Welcome to the Feedback App</h1>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </>
      ) : (
        <Button onClick={handleSignIn} className="text-white font-bold">
          Sign in with Google
        </Button>
      )}
    </div>
  );
}
