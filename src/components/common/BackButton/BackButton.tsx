import { MouseEventHandler } from "react";
import { IconRetriever } from "../IconRetriever/IconRetriever";

interface BackButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export function BackButton({ handleClick }: BackButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="absolute w-[43px] h-[43px] rounded-full bg-primary-transparent z-1001 top-2"
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
