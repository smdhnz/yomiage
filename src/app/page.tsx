import { fetcher } from "~/lib/utils";
import { ToggleTheme } from "~/components/toggle-theme";
import { ChannelNameInput } from "~/components/channel-name-input";
import { SettingDialog } from "~/components/setting-dialog";
import { ConnectButton } from "~/components/connect-button";

export default async function Page() {
  const speakers = (
    await fetcher<string[]>(
      "https://static.tts.quest/voicevox_speakers_utf8.json",
    )
  ).map((label, i) => ({ label, value: i }));

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-4 rounded-xl border p-6 shadow-xl">
      <ChannelNameInput />
      <div className="flex w-full flex-wrap space-x-2">
        <ConnectButton />
        <div className="flex-grow" />
        <SettingDialog speakers={speakers} />
        <ToggleTheme />
      </div>
    </div>
  );
}
