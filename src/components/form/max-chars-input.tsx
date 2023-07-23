import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { maxCharsAtom } from "~/lib/atoms";

export const MaxCharsInput = () => {
  const [maxChars, setMaxChars] = useAtom(maxCharsAtom);

  return (
    <div className="flex flex-col gap-2">
      <Label>最大文字数</Label>
      <Input
        className="w-full"
        type="number"
        value={maxChars}
        onChange={(e) => {
          const num = Number(e.currentTarget.value);
          if (!isNaN(num)) setMaxChars(num);
        }}
      />
    </div>
  );
};
