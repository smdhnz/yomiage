import { atom } from "jotai";
import tmi from "tmi.js";

export const channelAtom = atom<string>("jp_unpi");
export const volumeAtom = atom<number>(0.5);
export const maxCharactersAtom = atom<number>(30);
export const excludeUsersAtom = atom<string>("");
export const excludeCharactersAtom = atom<string>("");

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
