"use client";

import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { toast } from "sonner";

import { Toggle } from "~/components/ui/toggle";
import {
  type Params,
  paramsAtom,
  clientAtom,
  connectedAtom,
  loadingAtom,
} from "~/lib/atoms";
import {
  urlReplace,
  omitReplace,
  multipleReplace,
  playAudio,
} from "~/lib/utils";
import { fetchVoiceVox } from "~/lib/voicevox";

const onMessageHandler = async (params: Params, user: string, text: string) => {
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
  const [connected, setConnected] = useAtom(connectedAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  let listener: any;

  useEffect(() => {
    if (!client) return;

    client.onJoin(() => {
      toast.success("Connected");
      setConnected(true);
      setLoading(false);
      listener = client.onMessage(async (_channel, user, text, _msg) => {
        toast(user, { description: text });
        console.log(user, text);
        await onMessageHandler(params, user, text);
      });
    });
    client.onDisconnect(() => {
      toast("Disconnected");
      setConnected(false);
      setLoading(false);
      client.removeListener(listener);
    });
    client.onJoinFailure(() => {
      toast.error("Error");
      setLoading(false);
    });
  }, [client]);

  const onClick = () => {
    if (!client) return;

    setLoading(true);

    if (connected) {
      client.quit();
    } else {
      client.connect();
    }
  };

  return (
    <Toggle
      variant="outline"
      disabled={loading}
      pressed={connected}
      onClick={onClick}
    >
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {connected ? "Disconnect" : "Connect"}
    </Toggle>
  );
}
