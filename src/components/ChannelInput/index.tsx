import { type ChangeEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "~/components/ui";
import { channelAtom } from "~/atoms";

export const ChannelInput = () => {
  const [channel, setChannel] = useAtom(channelAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChannel(e.currentTarget.value);
  };

  return (
    <Input
      label="チャンネル名"
      id="channel"
      value={channel}
      onChange={handleChange}
    />
  );
};
