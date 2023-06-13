import { signIn } from "next-auth/react";
import { SiDiscord } from "react-icons/si";

export default () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-6xl font-extrabold tracking-tight text-white">
          yomiage
        </h1>
        <p className="text-center text-white">
          配信中のコメントの読み上げをブラウザ上で行えます
          <br />
          ※現在はTwitchのみ
        </p>
        <button
          onClick={() => void signIn("discord")}
          className="flex items-center rounded-xl bg-[#5865f2] px-5 py-3 text-white shadow-xl transition hover:bg-[#4752c4] hover:text-slate-200 active:scale-95"
        >
          <SiDiscord className="mr-3 h-6 w-6" />
          Sign in with Discord
        </button>
      </div>
    </main>
  );
};

import type { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/auth";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  if (session) {
    return { redirect: { destination: "/yomiage" } };
  }
  return { props: {} };
}
