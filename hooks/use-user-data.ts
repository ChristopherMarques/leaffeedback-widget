export const useUserData = async (userId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
