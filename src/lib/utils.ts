import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 型静的fetch
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

// 遅延
export const delay = (ms: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//URL置換
export function urlReplace(text: string, placedText: string) {
  const regex = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/;
  return text.replace(regex, placedText);
}

// 省略置換
export function omitReplace(text: string, n: number, placedText: string) {
  if (text.length <= n) return text;
  return text.substring(0, n) + placedText;
}

// 複数置換
export function multipleReplace(
  text: string,
  replaceWords: { from: string; to: string }[],
): string {
  let result = text;
  for (const word of replaceWords) {
    const escapedTarget = word.from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedTarget, "gi"); // 全部置換 + 大文字小文字無視
    result = result.replace(regex, word.to);
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

export class AsyncQueue {
  private queue: (() => Promise<void>)[] = [];
  private isRunning: boolean = false;

  enqueue(asyncFunc: () => Promise<void>) {
    this.queue.push(asyncFunc);
    this.runQueue();
  }

  private async runQueue() {
    if (this.isRunning) return;
    this.isRunning = true;

    while (this.queue.length > 0) {
      const asyncFunc = this.queue.shift();
      if (asyncFunc) {
        await asyncFunc();
      }
    }

    this.isRunning = false;
  }
}
