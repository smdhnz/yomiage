import { useAtom } from "jotai";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { channelNameAtom } from "~/lib/atoms";

export const ChannelNameInput = () => {
  const [channelName, setChannelName] = useAtom(channelNameAtom);

  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor="channel-name">チャンネル名</Label>
      <Input
        id="channel-name"
        className="w-full"
        value={channelName}
        onChange={(e) => setChannelName(e.currentTarget.value)}
      />
    </div>
  );
};
