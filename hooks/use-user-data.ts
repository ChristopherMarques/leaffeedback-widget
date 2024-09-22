import { getCookie } from "cookies-next";
import { getAuth } from "firebase-admin/auth";
import { User } from "firebase/auth";

export const useUserData = async (user: User) => {
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user?userId=${user.uid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
        name: user.displayName,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  }

  const userData = await response.json();
  return { user: userData };
};
