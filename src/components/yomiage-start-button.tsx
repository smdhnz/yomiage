import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import toast from "react-hot-toast";

import { Toggle } from "~/components/ui/toggle";
import { paramAtom, clientAtom } from "~/lib/atoms";
import { fetchVoiceVox } from "~/lib/voicevox";
import { urlReplace, omitReplace, playAudio, replace } from "~/lib/utils";

export const YomiageStartButton = () => {
  const param = useAtomValue(paramAtom);
  const client = useAtomValue(clientAtom).twitch;

  const [start, setStart] = useState(false);

  useEffect(() => {
    client.removeAllListeners();

    client.on("message", (_channel, tags, message, _self) => {
      toast(`${tags["display-name"]}: ${message}`);

      let value: string;

      const username = tags["username"];
      const displayName = tags["display-name"];

      if (!username) return;
      if (param.filters.ngUsers.includes(username)) return;
      if (param.filters.ngWords.some((v) => message.includes(v))) return;

      value = urlReplace(message, "URL省略");
      value = omitReplace(value, param.filters.maxChars, "以下省略");
      if (param.readUname) value = `${displayName ?? ""}、${value}`;
      value = replace(value, param.replaceWords);

      fetchVoiceVox(param.speakerId, value)
        .then(async (audio) => {
          audio.volume = param.volume[0] ?? 0.5;
          await playAudio(audio);
        })
        .catch(console.error);
    });
  }, [param, client]);

  const handlePress = () => {
    if (start) {
      client.disconnect().catch(console.error);
    } else {
      client.connect().catch(console.error);
    }

    setStart((prev) => !prev);
  };

  return (
    <Toggle variant="outline" onClick={handlePress} className="w-full">
      読み上げ{start ? "終了" : "開始"}
    </Toggle>
  );
};
