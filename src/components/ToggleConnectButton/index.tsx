import * as Toggle from "@radix-ui/react-toggle";
import { useHook } from "./hook";

export const ToggleConnectButton = () => {
  const { connected, handlePress } = useHook();

  return (
    <Toggle.Root
      aria-label="Toggle Connect"
      pressed={connected}
      onPressedChange={handlePress}
      className=""
    >
      {!connected ? "接続する" : "接続を切る"}
    </Toggle.Root>
  );
};
