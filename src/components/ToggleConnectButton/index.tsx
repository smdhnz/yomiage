import * as Toggle from "@radix-ui/react-toggle";
import { useHook } from "./hook";
import { cn, buttonVariable } from "~/utils";

export const ToggleConnectButton = () => {
  const { connected, handlePress } = useHook();

  const className = cn(
    buttonVariable,
    connected ? "bg-red-500/10" : "bg-white/10",
    connected ? "hover:bg-red-500/20" : "hover:bg-white/20",
    connected ? "shadow-lg shadow-red-500" : ""
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
