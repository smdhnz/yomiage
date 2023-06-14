import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "~/components/ui";
import { maxCharactersAtom } from "~/atoms";

export const MaxCharactersInput = () => {
  const [maxCharacters, setMaxCharacters] = useAtom(maxCharactersAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);
    setMaxCharacters(isNaN(num) ? 0 : num);
  };

  return (
    <Input
      label="最大文字数"
      id="maxCharacters"
      type="number"
      value={maxCharacters}
      onChange={handleChange}
    />
  );
};
