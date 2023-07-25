import * as React from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { type GetServerSidePropsContext } from "next";

import { getServerAuthSession } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/form";

export default function Yomiage() {
  const router = useRouter();
  const handleSignOut = () => {
    signOut().then(() => {
      router.replace("/");
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-8 py-8">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-semibold">yomiage - fumiya.dev</h1>
        <Button onClick={handleSignOut} variant="link">
          ログアウト
        </Button>
      </div>
      <Form />
      <p className="text-center text-xs font-bold text-muted-foreground">
        VOICEVOX: ずんだもん
      </p>
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return { props: { session } };
}
