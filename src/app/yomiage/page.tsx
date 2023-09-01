import { fetcher } from "~/lib/utils";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { SignOutButton } from "~/components/sign-out-button";
import { ChannelNameInput } from "./channel-name-input";
import { SettingDialog } from "./setting-dialog";
import { ConnectButton } from "./connect-button";
import Tooltip from "~/components/tooltip";

export default async function Page() {
  const speakers = (
    await fetcher<string[]>(
      "https://static.tts.quest/voicevox_speakers_utf8.json"
    )
  ).map((label, i) => ({ label, value: i }));

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-4">
      <div className="flex flex-wrap space-x-2">
        <Tooltip text="Sign out">
          <SignOutButton variant="ghost" />
        </Tooltip>
        <Tooltip text="Toggle color theme">
          <ModeToggle />
        </Tooltip>
        <Tooltip text="Settings">
          <SettingDialog speakers={speakers} />
        </Tooltip>
      </div>
      <div className="flex items-end space-x-2">
        <ChannelNameInput />
        <ConnectButton />
      </div>
    </div>
  );
}
