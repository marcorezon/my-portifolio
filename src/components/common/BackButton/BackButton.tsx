import { MouseEventHandler } from "react";
import { IconRetriever } from "../IconRetriever/IconRetriever";

interface BackButtonProps {
  style?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export function BackButton({ style = "", handleClick }: BackButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`relative w-[43px] h-[43px] rounded-full bg-primary-transparent z-30 hover:scale-110 ${style}`}
    >
      <IconRetriever
        style="m-auto"
        iconName="arrow-horizontal"
        width={32}
        height={32}
      />
    </button>
  );
}
