import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "~/components/ui";
import { excludeCharactersAtom } from "~/atoms";

export const ExcludeCharactersInput = () => {
  const [excludeCharacters, setExcludeCharacters] = useAtom(
    excludeCharactersAtom
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExcludeCharacters(e.currentTarget.value);
  };

  return (
    <Input
      label="除外するキーワード（カンマ区切り）"
      id="excludeCharacters"
      value={excludeCharacters}
      onChange={handleChange}
    />
  );
};
