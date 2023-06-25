import { useReducer, useEffect } from "react";
import { useAtomValue } from "jotai";
import { paramAtom, clientAtom } from "~/atoms";
import { fetchVoiceVox } from "~/libs/voicevox";
import { urlReplace, omitReplace, playAudio } from "~/utils";

export const useHook = () => {
  const [connected, toggleConnect] = useReducer((prev) => !prev, false);
  const param = useAtomValue(paramAtom);
  const client = useAtomValue(clientAtom).twitch;

  useEffect(() => {
    client.removeAllListeners();
    client.on("message", (_channel, tags, message, _self) => {
      const author = tags["username"];
      const displayName = tags["display-name"];

      console.log(`${displayName ?? ""}[${author ?? ""}]: ${message}`);

      // 除外
      if (!author) return;
      if (param.filter.exclude.users.includes(author)) return;
      if (param.filter.exclude.characters.some((c) => message.includes(c)))
        return;

      // 置換
      const replacedMessage = omitReplace(
        `${displayName ?? ""}: ` + urlReplace(message, "URL省略"),
        param.filter.maxCharacters,
        "以下省略"
      );

      // ボイボ取得 & 再生
      fetchVoiceVox(3, replacedMessage)
        .then(async (audio) => {
          audio.volume = param.volume;
          await playAudio(audio);
        })
        .catch(console.error);
    });
  }, [param, client]);

  const handlePress = () => {
    if (connected) {
      client.disconnect().catch(console.error);
    } else {
      client.connect().catch(console.error);
    }
    toggleConnect();
  };

  return {
    connected,
    handlePress,
  };
};
