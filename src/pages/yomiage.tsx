import { type GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import { Button } from "~/components/ui/button";
import { ToggleThemeButton } from "~/components/toggle-theme-button";
import { ChannelNameInput } from "~/components/channel-name-input";
import { MaxCharsInput } from "~/components/max-chars-input";
import { NgWordsInput } from "~/components/ng-words-input";
import { NgUsersInput } from "~/components/ng-users-input";
import { ReplaceWordsInput } from "~/components/replace-words-input";
import { VolumeSlider } from "~/components/volume-slider";
import { ReadUnameToggle } from "~/components/read-uname-toggle";
import { YomiageStartButton } from "~/components/yomiage-start-button";
import { getServerAuthSession } from "~/server/auth";
import { typedFetch } from "~/lib/utils";
import { SpeakerSelect } from "~/components/speaker-select";

type Props = {
  voicevoxSpeakers: {
    label: string;
    value: number;
  }[];
};

export default function Yomiage(props: Props) {
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

      <div className="flex flex-col gap-6 rounded border p-12 shadow">
        <ChannelNameInput />
        <MaxCharsInput />
        <NgWordsInput />
        <NgUsersInput />
        <ReplaceWordsInput />
        <VolumeSlider />
        <ReadUnameToggle />
        <SpeakerSelect {...props} />
        <YomiageStartButton />
      </div>
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

  const res = await typedFetch<string[]>(
    "https://static.tts.quest/voicevox_speakers_utf8.json"
  );

  return {
    props: {
      voicevoxSpeakers: res.map((label, i) => ({ label, value: i })),
    },
  };
}
