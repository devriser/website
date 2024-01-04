"use client";

import { useTheme } from "next-themes";

export function SearchIcon() {
  const theme = useTheme();

  const svgColor = theme.theme === "dark" ? "white" : "black";

  return (
    <svg
      id="Layer_1"
      enableBackground="new 0 0 128 128"
      height="20"
      viewBox="0 0 128 128"
      width="20"
      fill={svgColor}
    >
      <path
        id="Search"
        d="m118.828 113.172-29.036-29.037c6.366-7.633 10.208-17.441 10.208-28.135 0-24.262-19.738-44-44-44s-44 19.738-44 44 19.738 44 44 44c10.694 0 20.502-3.842 28.135-10.208l29.037 29.037c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.563-1.563 1.563-4.095 0-5.657zm-98.828-57.172c0-19.85 16.148-36 36-36s36 16.15 36 36-16.148 36-36 36-36-16.15-36-36z"
      />
    </svg>
  );
}

export function ArrowIcon({
  direction,
}: {
  direction: "left" | "right" | "up" | "down";
}) {
  let degree = "";
  if (direction === "right") degree = "0deg";
  if (direction === "left") degree = "180deg";
  if (direction === "down") degree = "90deg";
  if (direction === "up") degree = "-90deg";

  const theme = useTheme();

  const svgColor = theme.theme === "dark" ? "white" : "black";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      style={{ transform: `rotate(${degree})` }}
    >
      <path
        d="M6.7071 6.67083C6.31634 7.05996 5.68432 7.0593 5.29437 6.66936L0.53682 1.91181C0.240343 1.61533 0.240342 1.13465 0.53682 0.838168C0.833828 0.54116 1.31556 0.54177 1.61182 0.839529L5.2929 4.5393C5.68313 4.93151 6.31768 4.93231 6.7089 4.54109L10.3881 0.861927C10.6846 0.565384 11.1654 0.565384 11.4619 0.861927C11.7589 1.15891 11.7584 1.64056 11.4608 1.93692L6.7071 6.67083Z"
        fill={svgColor}
      />
    </svg>
  );
}

export function CloseIcon({ size }: any) {
  const ratioSize = size ? size : 8;
  return (
    <svg height={ratioSize} width={ratioSize} viewBox="0 0 512 512">
      <path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z" />
      <path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z" />
    </svg>
  );
}
