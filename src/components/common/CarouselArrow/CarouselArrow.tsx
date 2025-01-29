import { MouseEventHandler } from "react";
import { IconRetriever } from "../IconRetriever/IconRetriever";

interface CarouselArrowProps {
  variant: "right" | "left";
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function CarouselArrow({ variant, onClick }: CarouselArrowProps) {
  const positionVariant = variant === "right" ? "right-0" : "left-0 rotate-180";
  return (
    <button
      onClick={onClick}
      className={`absolute w-[100px] h-[100px] rounded-full border border-primary-white z-1001 ${positionVariant}`}
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
