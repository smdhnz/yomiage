import { fetcher } from "~/lib/utils";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { SignOutButton } from "~/components/sign-out-button";
import { SettingForm } from "./setting-form";

export default async function Page() {
  const speakers = (
    await fetcher<string[]>(
      "https://static.tts.quest/voicevox_speakers_utf8.json"
    )
  ).map((label, i) => ({ label, value: i }));

  return (
    <div>
      <div className="fixed right-5 top-5 flex gap-2">
        <ModeToggle />
        <SignOutButton variant="ghost" />
      </div>
      <SettingForm speakers={speakers} className="w-full max-w-xl p-8" />
    </div>
  );
}
