import { useReducer, useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchVoiceVox } from "~/libs/voicevox";
import { urlReplace, omitReplace, playAudio } from "~/utils";
import { paramState, clientState } from "~/proxy";

export const useHook = () => {
  const [connected, toggleConnect] = useReducer((prev) => !prev, false);
  const param = useSnapshot(paramState);
  const client = useSnapshot(clientState).twitch;

  useEffect(() => {
    client.removeAllListeners();

    client.on("message", (_channel, tags, message, _self) => {
      const author = tags["username"];

      // exclude
      if (!author) return;
      if (param.filter.exclude.usernames.includes(author)) return;
      if (param.filter.exclude.characters.some(message.includes)) return;

      console.log(author, message);

      // 置換
      const replacedMessage = omitReplace(
        urlReplace(message, "URL省略"),
        param.filter.max,
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
  });

  const handlePress = () => {
    if (connected) {
      toggleConnect();
      client.disconnect().catch(console.error);
    } else {
      toggleConnect();
      client.connect().catch(console.error);
    }
  };

  return {
    connected,
    handlePress,
  };
};
