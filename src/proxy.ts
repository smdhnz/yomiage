import { proxy, subscribe } from "valtio";
import tmi from "tmi.js";

export type Param = {
  channel: string;
  volume: number;
  filter: {
    max: number;
    exclude: {
      characters: string[];
      usernames: string[];
    };
  };
};

export const paramState = proxy<Param>(
  (JSON.parse(localStorage.getItem("_yomiage.param") ?? "") as Param) || {
    channel: "",
    volume: 0.5,
    filter: {
      max: 30,
      exclude: {
        characters: [],
        usernames: [],
      },
    },
  }
);

subscribe(paramState, () => {
  localStorage.setItem("_yomiage.param", JSON.stringify(paramState));
});

export type Client = {
  twitch: tmi.Client;
};

export const clientState = proxy<Client>({
  twitch: new tmi.Client({ channels: [paramState.channel] }),
});
