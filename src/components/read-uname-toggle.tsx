import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { readUnameAtom } from "~/lib/atoms";

export const ReadUnameToggle = () => {
  const [readUname, setReadUname] = useAtom(readUnameAtom);

  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor="read-uname">ユーザー名の読み上げ</Label>
      <Switch
        id="read-uname"
        checked={readUname}
        onCheckedChange={setReadUname}
      />
    </div>
  );
};
