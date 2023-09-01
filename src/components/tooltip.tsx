import React, { memo } from "react";

export type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: React.FC<TooltipProps> = memo((props) => {
  return (
    <span className="group relative">
      <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>

      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
