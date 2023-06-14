import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import tmi from "tmi.js";

export const channelAtom = atomWithStorage<string>("_yomiage.channel", "");
export const volumeAtom = atomWithStorage<number>("_yomiage.volume", 0.5);
export const maxCharactersAtom = atomWithStorage<number>(
  "_yomiage.maxCharacters",
  30
);
export const excludeUsersAtom = atomWithStorage<string>(
  "_yomiage.excludeUsers",
  ""
);
export const excludeCharactersAtom = atomWithStorage<string>(
  "_yomiage.excludeCharacters",
  ""
);

export const paramAtom = atom((get) => ({
  channel: get(channelAtom),
  volume: get(volumeAtom),
  filter: {
    maxCharacters: get(maxCharactersAtom),
    exclude: {
      users: get(excludeUsersAtom)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
      characters: get(excludeCharactersAtom)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
    },
  },
}));

export const tmiClientAtom = atom(
  (get) => new tmi.Client({ channels: [get(channelAtom)] })
);

export const clientAtom = atom((get) => ({
  twitch: get(tmiClientAtom),
}));
