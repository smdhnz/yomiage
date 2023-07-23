import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function typedFetch<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return await fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

//URL置換
export function urlReplace(str: string, placedText: string) {
  return str.replace(/^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/, placedText);
}

// 省略置換
export function omitReplace(str: string, n: number, placedText: string) {
  return str.length > n ? str.substring(0, n) + placedText : str;
}

// 置換
export function replace(
  str: string,
  replaceWords: { from: string; to: string }[]
): string {
  let result = str;
  for (const word of replaceWords) {
    result = result.replace(word.from, word.to);
  }
  return result;
}

// HTML Audio再生
export function playAudio(audio: HTMLAudioElement) {
  return new Promise((res) => {
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(console.error);
    audio.onended = res;
  });
}
