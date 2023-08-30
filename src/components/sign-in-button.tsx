"use client";

import { useCallback } from "react";
import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

export function SignInButton() {
  const handleSignIn = useCallback(
    () => signIn("discord", { redirect: true, callbackUrl: "/" }),
    []
  );

  return (
    <Button onClick={handleSignIn} variant="link">
      Sign in with Discord
    </Button>
  );
}
