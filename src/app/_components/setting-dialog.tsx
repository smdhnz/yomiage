"use client";

import * as React from "react";
import { useImmerAtom } from "jotai-immer";
import { useAtomValue } from "jotai";
import { Trash2, PlusSquare, Settings, ArrowRight } from "lucide-react";

import { paramsAtom, connectedAtom, loadingAtom } from "~/lib/atoms";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type Props = {
  speakers: { label: string; value: number }[];
};

export function SettingDialog({ speakers }: Props) {
  const [params, setParams] = useImmerAtom(paramsAtom);
  const connected = useAtomValue(connectedAtom);
  const loading = useAtomValue(loadingAtom);

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button disabled={connected || loading} variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen max-w-md overflow-y-auto rounded-md">
        <DialogHeader>
          <DialogTitle>設定</DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-4"}>
          <Labeled htmlFor="maxChars" label="最大文字数">
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

          <Labeled htmlFor="ngWords" label="NGワード">
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

          <Labeled htmlFor="ngUsers" label="NGユーザー">
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

          <Labeled htmlFor="replaceWords" label="単語の読み換え">
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
                  <ArrowRight className="h-[1.2rem] w-[1.2rem]" />
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
              追加する
            </Button>
          </Labeled>

          <Labeled
            htmlFor="volume"
            label={`音量 ${parseInt(`${params.volume[0]! * 100}`, 10)}%`}
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

          <Labeled htmlFor="readUname" label="ユーザー名の読み上げ">
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

          <Labeled htmlFor="speakers" label="VOICEVOX話者">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
