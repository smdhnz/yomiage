"use client";

import { ChatClient } from "@twurple/chat";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  type Params,
  paramsAtom,
  connectedAtom,
  loadingAtom,
} from "@/lib/atoms";
import {
  urlReplace,
  omitReplace,
  multipleReplace,
  playAudio,
  AsyncQueue,
} from "@/lib/utils";
import { fetchVoiceVox } from "@/lib/voicevox";

const onMessageHandler = async (params: Params, user: string, text: string) => {
  let message: string;
  if (!user) return;
  if (params.filters.ngUsers.includes(user)) return;
  if (params.filters.ngWords.some((word) => text.includes(word))) return;
  message = urlReplace(text, "URL省略");
  message = omitReplace(text, params.filters.maxChars, "以下省略");
  message = multipleReplace(text, params.replaceWords);
  message = params.readUname ? `${user} ${message}` : message;
  const audio = await fetchVoiceVox(params.speakerId, message);
  audio.volume = params.volume[0] ?? 0.5;
  await playAudio(audio);
};

export function ConnectButton() {
  const asyncQueue = new AsyncQueue();

  const params = useAtomValue(paramsAtom);
  const [connected, setConnected] = useAtom(connectedAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [client, setClient] = useState<ChatClient | null>(null);

  const connect = () => {
    setLoading(true);

    if (params.channelName === "") return;

    const newClient = new ChatClient({ channels: [params.channelName] });

    newClient.connect();

    newClient.onJoin(() => {
      toast.success("Connected");
      setConnected(true);
      setLoading(false);
    });
    newClient.onDisconnect(() => {
      toast("Disconnected");
      setConnected(false);
      setLoading(false);
    });
    newClient.onJoinFailure(() => {
      toast.error("Error");
      setLoading(false);
    });
    newClient.onMessage((_channel, user, text, msg) => {
      const username = msg.userInfo.displayName ?? user;
      toast(user, { description: text });
      console.log(user, text);
      asyncQueue.enqueue(async () => {
        await onMessageHandler(params, username, text);
      });
    });

    setClient(newClient);
  };

  const disconnect = () => {
    if (client) {
      client.quit();
      setClient(null);
    }
  };

  return (
    <Button
      variant="default"
      disabled={loading || !params.channelName}
      onClick={connected ? disconnect : connect}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
      {!loading ? (connected ? "STOP" : "START") : null}
    </Button>
  );
}
