import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react";
import { cn } from "~/lib/utils";

export default function Home() {
  const handleSignIn = () => signIn("discord");

  return (
    <div
      className={cn(
        "min-h-screen",
        "flex flex-col gap-5",
        "items-center justify-center"
      )}
    >
      <h1 className="text-lg font-semibold">yomiage - fumiya.dev</h1>
      <Button onClick={handleSignIn} variant="link">
        ログイン
      </Button>
    </div>
  );
}

import type { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/auth";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  if (session) {
    return { redirect: { destination: "/yomiage" } };
  }
  return { props: {} };
}
