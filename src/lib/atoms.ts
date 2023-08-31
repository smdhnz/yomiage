import { ChatClient } from "@twurple/chat";
import { atom } from "jotai";
import { atomWithStorage, selectAtom } from "jotai/utils";
import { toast } from "sonner";

export type Params = {
  channelName: string;
  filters: {
    maxChars: number;
    ngWords: string[];
    ngUsers: string[];
  };
  replaceWords: {
    from: string;
    to: string;
  }[];
  volume: number[];
  readUname: boolean;
  speakerId: number;
};

export const paramsAtom = atomWithStorage<Params>("yomiage-fumiya.dev_param", {
  channelName: "",
  filters: {
    maxChars: 30,
    ngWords: [],
    ngUsers: [],
  },
  replaceWords: [{ from: "", to: "" }],
  volume: [0.5],
  readUname: false,
  speakerId: 3,
});

const channelNameAtom = selectAtom(paramsAtom, (params) => params.channelName);

export const clientAtom = atom<ChatClient | null>((get) => {
  const channelName = get(channelNameAtom);

  if (!channelName) return null;

  const client = new ChatClient({
    channels: [channelName],
  });

  client.onJoin(() => toast.success("Connected"));
  client.onJoinFailure(() => {
    toast.error("Connection failure");
    client.quit();
  });
  client.onDisconnect(() => console.log("disconnected"));

  return client;
});
