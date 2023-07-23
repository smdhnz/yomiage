import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { volumeAtom } from "~/lib/atoms";

export const VolumeSlider = () => {
  const [volume, setVolume] = useAtom(volumeAtom);

  return (
    <div className="flex flex-col items-start gap-4">
      <Label>音量</Label>
      <Slider
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onValueChange={setVolume}
      />
      <p>{`${parseInt(`${volume[0]! * 100}`, 10)}`}%</p>
    </div>
  );
};
