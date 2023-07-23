import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "~/components/ui/badge";

type Props = {
  values: string[];
  setValues: (values: string[]) => void;
};

export function CreatableInput({ values, setValues }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleDelete = (value: string) => {
    setValues(values.filter((v) => v !== value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === "Backspace") {
        if (input.value === "") {
          setValues([...values.slice(0, values.length - 1)]);
        }
      }
      if (e.key === "Escape") {
        input.blur();
      }
      if (e.key === "Enter") {
        if (input.value !== "") {
          if (!values.includes(inputValue)) {
            setValues([...values, inputValue]);
            setInputValue("");
          }
        }
      }
    }
  };

  return (
    <div onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {values.map((value) => {
            return (
              <Badge key={value} variant="secondary">
                {value}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleDelete(value);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleDelete(value)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            placeholder=""
            className="h-[22px] flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
}
