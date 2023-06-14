import * as Toggle from "@radix-ui/react-toggle";
import { useHook } from "./hook";

export const ToggleConnectButton = () => {
  const { connected, handlePress } = useHook();

  return (
    <Toggle.Root
      aria-label="Toggle Connect"
      pressed={connected}
      onPressedChange={handlePress}
      className="bg-zinc-600 px-4 py-2"
    >
      {!connected ? "接続する" : "接続を切る"}
    </Toggle.Root>
  );
};
