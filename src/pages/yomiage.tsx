import { signOut } from "next-auth/react";
import { ToggleConnectButton } from "~/components/ToggleConnectButton";
import { ChannelInput } from "~/components/ChannelInput";
import { MaxCharactersInput } from "~/components/MaxCharactersInput";
import { ExcludeCharactersInput } from "~/components/ExcludeCharactersInput";
import { ExcludeUsersInput } from "~/components/ExcludeUsersInput";
import { VolumeSlider } from "~/components/VolumeSlider";
import { buttonVariable } from "~/utils";

import { useAtomValue } from "jotai";
import { channelAtom } from "~/atoms";

const Yomiage = () => {
  const channel = useAtomValue(channelAtom);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="w-full max-w-sm rounded-xl border border-white/20 bg-white/10 p-6">
        <div className="flex flex-col gap-4">
          <ChannelInput />
          <MaxCharactersInput />
          <ExcludeCharactersInput />
          <ExcludeUsersInput />
          <VolumeSlider />
          <ToggleConnectButton />
          <button
            className={buttonVariable}
            onClick={() => {
              if (!channel) return;

              window.open(
                `https://www.twitch.tv/${channel}/chat`,
                "Chat",
                "width=450,height=600,scrollbars=yes"
              );
            }}
          >
            チャットを開く
          </button>
          <button className={buttonVariable} onClick={() => void signOut()}>
            サインアウト
          </button>
          <p className="text-center text-xs font-bold text-white/50">
            VOICEVOX: ずんだもん
          </p>
        </div>
      </div>
    </main>
  );
};

export default Yomiage;

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
