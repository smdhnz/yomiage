import * as Toggle from "@radix-ui/react-toggle";
import { useHook } from "./hook";

export const ToggleConnectButton = () => {
  const { connected, handlePress } = useHook();

  const cn = [
    "rounded-md",
    "px-4 py-2",
    "text-white",
    "transition",
    "active:scale-95",
    connected ? "bg-red-500/10" : "bg-white/10",
    connected ? "hover:bg-red-500/20" : "hover:bg-white/20",
    connected ? "shadow-lg shadow-red-500" : "",
  ].join(" ");

  return (
    <Toggle.Root
      aria-label="Toggle Connect"
      pressed={connected}
      onPressedChange={handlePress}
      className={cn}
    >
      {!connected ? "スタート" : "ストップ"}
    </Toggle.Root>
  );
};
