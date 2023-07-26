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
      <Label>VOICEVOX 話者</Label>
      <Select
        onValueChange={(value) => {
          const num = Number(value);

          if (num >= 0) setSpeakerId(num);
        }}
        value={speakerId.toString()}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {props.voicevoxSpeakers.map((s) => (
            <SelectItem key={s.label} value={s.value.toString()}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
