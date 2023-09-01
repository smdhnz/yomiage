import { ChatClient } from "@twurple/chat";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { focusAtom } from "jotai-optics";

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

export const channelNameAtom = focusAtom(paramsAtom, (optics) =>
  optics.prop("channelName")
);

export const connectedAtom = atom(false);
export const loadingAtom = atom(false);

export const clientAtom = atom<ChatClient | null>((get) => {
  return get(channelNameAtom)
    ? new ChatClient({ channels: [get(channelNameAtom)] })
    : null;
});
