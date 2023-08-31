import { fetcher } from "./utils";

type ResponseType = {
  retryAfter: number | undefined;
  mp3StreamingUrl: string | undefined;
  errorMessage: string | undefined;
};

export function fetchVoiceVox(
  speakerId: number,
  text: string
): Promise<HTMLAudioElement> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    const params = `?speaker=${speakerId}&text=${text}`;

    if (audio.src.length > 0) {
      reject(new Error("Audio src already set"));
    }

    fetcher<ResponseType>(
      "https://api.tts.quest/v3/voicevox/synthesis" + params
    )
      .then((data) => {
        if (data.retryAfter !== undefined) {
          setTimeout(() => {
            fetchVoiceVox(speakerId, text)
              .then((audio) => resolve(audio))
              .catch((error) => reject(error));
          }, 1000 * (1 + data.retryAfter));
        } else if (data.mp3StreamingUrl !== undefined) {
          audio.src = data.mp3StreamingUrl;
          resolve(audio);
        } else if (data.errorMessage !== undefined) {
          reject(new Error(data.errorMessage));
        } else {
          reject(new Error("serverError"));
        }
      })
      .catch((error) => reject(error));
  });
}
