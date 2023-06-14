import * as Toggle from "@radix-ui/react-toggle";
import { useHook } from "./hook";
import { cn } from "~/utils";

export const ToggleConnectButton = () => {
  const { connected, handlePress } = useHook();

  const className = cn(
    "rounded-md",
    "px-4 py-2",
    "text-white",
    "transition",
    "active:scale-95",
    connected ? "bg-red-500/10" : "bg-white/10",
    connected ? "hover:bg-red-500/20" : "hover:bg-white/20",
    connected ? "shadow-lg shadow-red-500" : "",
    "focus-visible:ring-ring",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-white/50"
  );

  return (
    <Toggle.Root
      aria-label="Toggle Connect"
      pressed={connected}
      onPressedChange={handlePress}
      className={className}
    >
      {!connected ? "スタート" : "ストップ"}
    </Toggle.Root>
  );
};
