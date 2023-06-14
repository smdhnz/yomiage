import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "~/components/ui";
import { channelAtom } from "~/atoms";

export const ChannelInput = () => {
  const [channle, setChannel] = useAtom(channelAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChannel(e.currentTarget.value);
  };

  return (
    <Input
      label="チャンネル名"
      id="channel"
      value={channle}
      onChange={handleChange}
    />
  );
};
