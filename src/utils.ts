export function request<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}

  // This function is async, it will return a Promise:
): Promise<TResponse> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  return (
    fetch(url, config)
      // When got a response call a `json` method on it
      .then((response) => response.json())
      // and return the result data.
      .then((data) => data as TResponse)
  );

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}

//URL置換
export function urlReplace(str: string, placedText: string) {
  return str.replace(/^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/, placedText);
}

// 省略置換
export function omitReplace(str: string, n: number, placedText: string) {
  return str.length > n ? str.substring(0, n) + placedText : str;
}

// HTML Audio再生
export function playAudio(audio: HTMLAudioElement) {
  return new Promise((res) => {
    audio.play().catch(console.error);
    audio.onended = res;
  });
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonVariable = cn(
  "rounded-md",
  "px-4 py-2",
  "text-white",
  "transition",
  "active:scale-95",
  "focus-visible:ring-ring",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-white/50",
  "bg-white/10",
  "hover:bg-white/20"
);
