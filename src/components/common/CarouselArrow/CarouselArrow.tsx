import { IconRetriever } from "../IconRetriever/IconRetriever";

interface CarouselArrowProps {
    variant: "right" | "left";
}

export function CarouselArrow({variant}: CarouselArrowProps) {
    const positionVariant = variant === "right" ? "right-0" : "left-0 rotate-180";
    return (
        <button className={`absolute w-[43px] h-[43px] rounded-full bg-primary-transparent z-1001 top-2 ${positionVariant}`}>
            <IconRetriever style="m-auto" iconName="arrow-horizontal" width={32} height={32}/>
        </button>
    );
}