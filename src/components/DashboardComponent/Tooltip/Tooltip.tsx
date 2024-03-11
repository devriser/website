"use client";

import React, { ReactNode, useState } from "react";
import TooltipArrowIcon from "./TooltipArrow";
import CopyIcon from "./CopyIcon";

type Props = {
  children: ReactNode;
  text: string;
  copy?: boolean;
};

export default function Tooltip({ children, text, copy }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const showTooltip = () => {
    clearTimeout(timeoutId);
    if (text.length > 20) {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      className="relative inline-block"
    >
      {children}
      {isVisible && (
        <div className="absolute -left-1 bottom-8 flex min-w-[400px] max-w-[400px] items-center gap-2 whitespace-pre-wrap rounded-large bg-dashboard-table p-2 z-50 ">
          {text}
          {copy && (
            <span
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(text)}
            >
              <CopyIcon />
            </span>
          )}
          <div className="absolute -bottom-4">
            <TooltipArrowIcon />
          </div>
        </div>
      )}
    </div>
  );
}
