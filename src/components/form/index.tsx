import { ChannelNameInput } from "./channel-name-input";
import { MaxCharsInput } from "./max-chars-input";
import { NgWordsInput } from "./ng-words-input";
import { NgUsersInput } from "./ng-users-input";
import { ReplaceWordsInput } from "./replace-words-input";
import { VolumeSlider } from "./volume-slider";
import { ReadUnameToggle } from "./read-uname-toggle";
import { YomiageStartButton } from "./yomiage-start-button";

export const Form = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
      <div className="md:col-span-2">
        <ChannelNameInput />
      </div>
      <div className="md:col-span-1 md:col-start-1">
        <MaxCharsInput />
      </div>
      <div className="md:col-span-3">
        <NgWordsInput />
      </div>
      <div className="md:col-span-3">
        <NgUsersInput />
      </div>
      <div className="md:col-span-6 md:col-start-1">
        <ReplaceWordsInput />
      </div>
      <div className="md:col-span-6 md:col-start-1">
        <VolumeSlider />
      </div>
      <div className="md:col-span-6 md:col-start-1">
        <ReadUnameToggle />
      </div>
      <div className="md:col-span-2 md:col-start-1">
        <YomiageStartButton />
      </div>
      <div className="md:col-span-3 md:col-start-1">
        <p className="text-xs font-bold text-muted-foreground">
          VOICEVOX: ずんだもん
        </p>
      </div>
    </div>
  );
};
