import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { focusAtom } from "jotai-optics";
import tmi from "tmi.js";

type Param = {
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
};

export const paramAtom = atomWithStorage<Param>("yomiage-fumiya.dev_param", {
  channelName: "",
  filters: {
    maxChars: 30,
    ngWords: [],
    ngUsers: [],
  },
  replaceWords: [{ from: "", to: "" }],
  volume: [0.5],
  readUname: false,
});

export const channelNameAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("channelName")
);

export const maxCharsAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("filters").prop("maxChars")
);

export const ngWordsAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("filters").prop("ngWords")
);

export const ngUsersAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("filters").prop("ngUsers")
);

export const replaceWordsAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("replaceWords")
);

export const volumeAtom = focusAtom(paramAtom, (optic) => optic.prop("volume"));

export const readUnameAtom = focusAtom(paramAtom, (optic) =>
  optic.prop("readUname")
);

export const tmiClientAtom = atom(
  (get) => new tmi.Client({ channels: [get(channelNameAtom)] })
);

export const clientAtom = atom((get) => ({
  twitch: get(tmiClientAtom),
}));
