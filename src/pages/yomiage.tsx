import { ToggleConnectButton } from "~/components/ToggleConnectButton";
import { signOut } from "next-auth/react";
import { ChannelInput } from "~/components/ChannelInput";

export default () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="w-full max-w-sm rounded-xl border border-white/20 bg-white/10 p-6">
        <div className="flex flex-col gap-4">
          <ChannelInput />
          <ToggleConnectButton />
          <button
            className="rounded-md bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 active:scale-95"
            onClick={() => void signOut()}
          >
            サインアウト
          </button>
          <p className="text-center text-xs font-bold text-white/50">
            VOICEVOX: _____
          </p>
        </div>
      </div>
    </main>
  );
};

import { type GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/auth";

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
