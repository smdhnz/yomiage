import { fetcher } from "~/lib/utils";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { ChannelNameInput } from "./_components/channel-name-input";
import { SettingDialog } from "./_components/setting-dialog";
import { ConnectButton } from "./_components/connect-button";

export default async function Page() {
  const speakers = (
    await fetcher<string[]>(
      "https://static.tts.quest/voicevox_speakers_utf8.json"
    )
  ).map((label, i) => ({ label, value: i }));

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-4">
      <div className="flex flex-wrap space-x-2">
        <SettingDialog speakers={speakers} />
        <ModeToggle />
      </div>
      <div className="flex w-full items-end space-x-2">
        <ChannelNameInput />
        <ConnectButton />
      </div>
    </div>
  );
}
