"use client";

import * as React from "react";
import { useAtom, useAtomValue } from "jotai";

import { connectedAtom, channelNameAtom } from "~/lib/atoms";
import { Labeled } from "~/components/labeled";
import { Input } from "~/components/ui/input";

export function ChannelNameInput() {
  const [channelName, setChannelName] = useAtom(channelNameAtom);
  const connected = useAtomValue(connectedAtom);

  return (
    <Labeled htmlFor="channelName" label="Channel name">
      <Input
        id="channelName"
        value={channelName}
        disabled={connected}
        onChange={(e) => setChannelName(e.target.value)}
      />
    </Labeled>
  );
}
