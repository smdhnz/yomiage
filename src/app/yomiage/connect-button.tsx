"use client";

import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import { Toggle } from "~/components/ui/toggle";
import { clientAtom, type Params, paramsAtom } from "~/lib/atoms";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  urlReplace,
  omitReplace,
  multipleReplace,
  playAudio,
} from "~/lib/utils";
import { fetchVoiceVox } from "~/lib/voicevox";

const eventHandler = async (user: string, text: string, params: Params) => {
  toast(user, { description: text });

  let message: string;

  if (!user) return;
  if (params.filters.ngUsers.includes(user)) return;
  if (params.filters.ngWords.some((word) => message.includes(word))) return;

  message = urlReplace(text, "URL省略");
  message = omitReplace(text, params.filters.maxChars, "以下省略");
  message = multipleReplace(text, params.replaceWords);
  message = params.readUname ? `${user} ${message}` : message;

  const audio = await fetchVoiceVox(params.speakerId, message);
  audio.volume = params.volume[0] ?? 0.5;

  await playAudio(audio);
};

export function ConnectButton() {
  const params = useAtomValue(paramsAtom);
  const client = useAtomValue(clientAtom);

  const [listner, setListner] = useState(
    client
      ? client.onMessage(async (_channel, user, text, _msg) => {
          await eventHandler(user, text, params);
        })
      : null
  );

  const [pressed, setPressed] = useState(false);

  const onPressedChange = (nextPressed: boolean) => {
    if (client) {
      setPressed(nextPressed);
      if (client.isConnected) {
        client.quit();
      } else {
        client.connect();
      }
    }
  };

  return (
    <Toggle
      variant={"outline"}
      pressed={pressed}
      onPressedChange={onPressedChange}
      disabled={!client}
    >
      Start
    </Toggle>
  );
}
