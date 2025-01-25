"use client";

import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";
import { usePathname } from "next/navigation";

export function ListHeaderItem({ title }: { title: string }) {
  const pathname = usePathname();

  const logicalController = { displayBottomStyle: false, borderFormat: null };

  if (pathname.length === 1 && title === "About me") {
    logicalController.displayBottomStyle = true;
  } else if (pathname.toLowerCase() === title) {
    logicalController.displayBottomStyle = true;
  }

  const bottomStyle =
    "before:absolute before:bottom-1 before:h-1 before:min-w-[3rem] before:rounded-md before:bg-gradient-to-r from-secondary-blue to-secondary-lightBlue";

  return (
    <li
      className={`relative w-full flex items-center justify-center py-2 gap-2 rounded-3xl font-semibold text-lg text-center cursor-pointer hover:bg-primary-transparent 
        ${logicalController.displayBottomStyle ? bottomStyle : ""}
      `}
    >
      <IconRetriever
        iconName={title}
        style="[&_path]:stroke-[#ffffff]"
        width={25}
        height={25}
        pathVariant="headerIcons\"
      />
      <a>{title}</a>
    </li>
  );
}
