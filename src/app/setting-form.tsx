"use client";

import * as React from "react";
import { Trash2, PlusSquare } from "lucide-react";
import { useImmerAtom } from "jotai-immer";
import { paramsAtom } from "~/lib/atoms";
import { cn } from "~/lib/utils";
import { CreatableInput } from "~/components/creatable-input";
import { Labeled } from "~/components/labeled";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Toggle } from "~/components/ui/toggle";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  speakers: { label: string; value: number }[];
}

export function SettingForm({ className, speakers, ...props }: Props) {
  const [params, setParams] = useImmerAtom(paramsAtom);

  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <Labeled htmlFor="channelName" label="Channel name">
        <Input
          id="channelName"
          value={params.channelName}
          onChange={(e) =>
            setParams((d) => {
              d.channelName = e.target.value;
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="maxChars" label="Maximum character count">
        <Input
          id="maxChars"
          type="number"
          value={params.filters.maxChars}
          onChange={(e) =>
            setParams((d) => {
              d.filters.maxChars = Number(e.target.value);
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="ngWords" label="NG words">
        <CreatableInput
          id="ngWords"
          values={params.filters.ngWords}
          setValues={(values) =>
            setParams((d) => {
              d.filters.ngWords = values;
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="ngUsers" label="NG users">
        <CreatableInput
          id="ngUsers"
          values={params.filters.ngUsers}
          setValues={(values) =>
            setParams((d) => {
              d.filters.ngUsers = values;
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="replaceWords" label="Multiple word replacements">
        {params.replaceWords.map((replacedWord, i) => {
          return (
            <div
              key={`replaced-word_${i}`}
              className="flex w-full items-center gap-2"
            >
              <Input
                className="w-full flex-1"
                value={replacedWord.from}
                onChange={(e) => {
                  setParams((d) => {
                    d.replaceWords[i]!.from = e.target.value;
                  });
                }}
              />
              to
              <Input
                className="w-full flex-1"
                value={replacedWord.to}
                onChange={(e) => {
                  setParams((d) => {
                    d.replaceWords[i]!.to = e.target.value;
                  });
                }}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setParams((d) => {
                    d.replaceWords.splice(i, 1);
                  })
                }
              >
                <Trash2 className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>
          );
        })}
        <Button
          className="mr-auto flex gap-2 p-2"
          variant="ghost"
          onClick={() =>
            setParams((d) => {
              d.replaceWords.push({ from: "", to: "" });
            })
          }
        >
          <PlusSquare className="h-[1.2rem] w-[1.2rem]" />
          Add new
        </Button>
      </Labeled>

      <Labeled
        htmlFor="volume"
        label={`Volume ${parseInt(`${params.volume[0]! * 100}`, 10)}%`}
        className="mb-2"
      >
        <Slider
          id="volume"
          min={0}
          max={1}
          step={0.01}
          value={params.volume}
          onValueChange={(value) =>
            setParams((d) => {
              d.volume = value;
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="readUname" label="Read the username">
        <Switch
          id="readUname"
          checked={params.readUname}
          onCheckedChange={(value) =>
            setParams((d) => {
              d.readUname = value;
            })
          }
        />
      </Labeled>

      <Labeled htmlFor="speakers" label="VoiceVox speakers">
        <Select
          onValueChange={(value) => {
            const num = Number(value);

            if (num >= 0)
              setParams((d) => {
                d.speakerId = num;
              });
          }}
          value={`${params.speakerId}`}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-80">
            {speakers.map((s) => (
              <SelectItem key={s.label} value={`${s.value}`}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Labeled>

      <Toggle variant="outline" className="mr-auto">
        Start
      </Toggle>
    </div>
  );
}