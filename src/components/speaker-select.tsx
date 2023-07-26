import { useAtom } from "jotai";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";
import { speakerIdAtom } from "~/lib/atoms";

type Props = {
  voicevoxSpeakers: {
    label: string;
    value: number;
  }[];
};

export function SpeakerSelect(props: Props) {
  const [speakerId, setSpeakerId] = useAtom(speakerIdAtom);

  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor="speaker-select">VOICEVOX 話者</Label>
      <Select
        id="speaker-select"
        onValueChange={setSpeakerId}
        value={speakerId}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {props.voicevoxSpeakers.map((s) => (
            <SelectItem key={s.label} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
