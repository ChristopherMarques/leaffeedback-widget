import { useAuth } from "@/contexts/auth-context";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Logout = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <Button variant="ghost" onClick={signOut}>
        <LogOutIcon className="w-6 h-6 text-foreground" />
      </Button>
    </div>
  );
};

export default Logout;
