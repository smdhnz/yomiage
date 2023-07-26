import { type ChangeEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { replaceWordsAtom } from "~/lib/atoms";

export const ReplaceWordsInput = () => {
  const [replaceWords, setReplaceWords] = useAtom(replaceWordsAtom);

  const handleReplacedWordsChange =
    (index: number, key: keyof { from: string; to: string }) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const newData = replaceWords.map((item, i) => {
        if (i === index) {
          return { ...item, [key]: e.target.value };
        }
        return item;
      });
      setReplaceWords(newData);
    };

  const addReplacedWord = () =>
    setReplaceWords((prev) => [...prev, { from: "", to: "" }]);

  const removeReplacedWord = (index: number) => {
    const newData = [...replaceWords];
    newData.splice(index, 1);
    setReplaceWords(newData);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <Label>読み替えワード</Label>
      {replaceWords.map((value, i) => {
        return (
          <div
            key={`replaced-word-${i}`}
            className="flex w-full items-center gap-2"
          >
            <Input
              className="w-full basis-1/2"
              value={value.from}
              onChange={handleReplacedWordsChange(i, "from")}
            />
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
            <Input
              className="w-full basis-1/2"
              value={value.to}
              onChange={handleReplacedWordsChange(i, "to")}
            />
            <X
              className="h-6 w-6 cursor-pointer text-muted-foreground hover:text-red-400"
              onClick={() => removeReplacedWord(i)}
            />
          </div>
        );
      })}
      <Button onClick={addReplacedWord} variant="outline">
        追加
      </Button>
    </div>
  );
};
