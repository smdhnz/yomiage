"use client";

import { useCallback } from "react";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";

export const SignOutButton = ({ children, ...props }: ButtonProps) => {
  const handleSignOut = useCallback(
    () => signOut({ redirect: true, callbackUrl: "/signin" }),
    []
  );

  return (
    <Button onClick={handleSignOut} size="icon" {...props}>
      <LogOut className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Sign out</span>
    </Button>
  );
};
