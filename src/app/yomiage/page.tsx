import { fetcher } from "~/lib/utils";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { SignOutButton } from "~/components/sign-out-button";
import { ChannelNameInput } from "./channel-name-input";
import { SettingDialog } from "./setting-dialog";
import { ConnectButton } from "./connect-button";

export default async function Page() {
  const speakers = (
    await fetcher<string[]>(
      "https://static.tts.quest/voicevox_speakers_utf8.json"
    )
  ).map((label, i) => ({ label, value: i }));

  return (
    <div className="grid w-40 gap-4">
      <div className="flex space-x-2">
        <ModeToggle />
        <SignOutButton variant="ghost" />
      </div>
      <ChannelNameInput />
      <div className="flex space-x-2">
        <SettingDialog speakers={speakers} />
        <ConnectButton />
      </div>
    </div>
  );
}
