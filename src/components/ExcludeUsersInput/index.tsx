import { type ChangeEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "~/components/ui";
import { excludeUsersAtom } from "~/atoms";

export const ExcludeUsersInput = () => {
  const [excludeUsers, setExcludeUsers] = useAtom(excludeUsersAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExcludeUsers(e.currentTarget.value);
  };

  return (
    <Input
      label="除外するユーザー名（カンマ区切り）"
      id="excludeCharacters"
      value={excludeUsers}
      onChange={handleChange}
    />
  );
};
