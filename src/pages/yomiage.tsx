import { type GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import { Button } from "~/components/ui/button";
import { Form } from "~/components/form";
import { getServerAuthSession } from "~/server/auth";
import { ToggleThemeButton } from "~/components/toggle-theme-button";

export default function Yomiage() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut().then(() => {
      router.replace("/");
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-8 py-8">
      <div className="flex items-center">
        <h1 className="grow text-lg font-semibold">yomiage - fumiya.dev</h1>
        <ToggleThemeButton />
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
