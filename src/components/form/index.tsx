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
    <div className="flex flex-col gap-6 rounded border p-12 shadow">
      <ChannelNameInput />
      <MaxCharsInput />
      <NgWordsInput />
      <NgUsersInput />
      <ReplaceWordsInput />
      <VolumeSlider />
      <ReadUnameToggle />
      <YomiageStartButton />
    </div>
  );
};
