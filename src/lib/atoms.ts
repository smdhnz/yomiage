import { atomWithStorage } from "jotai/utils";

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
