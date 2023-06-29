import { useAtom } from "jotai";
import { LuVolumeX, LuVolume1, LuVolume2 } from "react-icons/lu";

import { Slider } from "~/components/ui/Slider";
import { volumeAtom } from "~/atoms";

export const VolumeSlider = () => {
  const [volume, setVolume] = useAtom(volumeAtom);

  const handleChange = (value: number[]) => {
    setVolume(value[0] ?? 0);
  };

  return (
    <div className="mx-2 flex gap-2">
      {volume === 0 && <LuVolumeX className="h-6 w-6 text-white " />}
      {volume > 0 && volume < 0.5 && (
        <LuVolume1 className="h-6 w-6 text-white" />
      )}
      {volume >= 0.5 && <LuVolume2 className="h-6 w-6 text-white" />}
      <Slider
        aria-label="volume"
        min={0}
        max={1}
        step={0.01}
        value={[volume]}
        className="flex-grow"
        onValueChange={handleChange}
      />
    </div>
  );
};
