import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { CreatableInput } from "~/components/ui/creatable-input";
import { ngUsersAtom } from "~/lib/atoms";

export const NgUsersInput = () => {
  const [ngUsers, setNgUsers] = useAtom(ngUsersAtom);

  return (
    <div className="flex flex-col gap-2">
      <Label>NGユーザー</Label>
      <CreatableInput values={ngUsers} setValues={setNgUsers} />
    </div>
  );
};
