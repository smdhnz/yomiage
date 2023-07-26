import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { CreatableInput } from "~/components/ui/creatable-input";
import { ngWordsAtom } from "~/lib/atoms";

export const NgWordsInput = () => {
  const [ngWords, setNgWords] = useAtom(ngWordsAtom);

  return (
    <div className="flex flex-col gap-2">
      <Label>NGワード</Label>
      <CreatableInput values={ngWords} setValues={setNgWords} />
    </div>
  );
};
