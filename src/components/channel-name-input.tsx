"use client";

import { useAtom, useAtomValue } from "jotai";

import { connectedAtom, channelNameAtom, loadingAtom } from "~/lib/atoms";
import { Labeled } from "~/components/labeled";
import { Input } from "~/components/ui/input";

export function ChannelNameInput() {
  const [channelName, setChannelName] = useAtom(channelNameAtom);
  const connected = useAtomValue(connectedAtom);
  const loading = useAtomValue(loadingAtom);

  return (
    <Labeled
      htmlFor="channelName"
      label="Twitch チャンネル名"
      className="w-full"
    >
      <Input
        id="channelName"
        autoComplete="off"
        value={channelName}
        disabled={connected || loading}
        onChange={(e) => setChannelName(e.target.value)}
      />
    </Labeled>
  );
}
