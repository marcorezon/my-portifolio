"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";
import formatRedirectPath from "@/shared/functions/formatRedirectPath";

export function ListHeaderItem({ title }: { title: string }) {
  const pathname = usePathname();

  const logicalController = { displayBottomStyle: "", borderFormat: null };
  const bottomStyle =
    "before:absolute before:bottom-1 before:h-1 before:min-w-[3rem] before:rounded-md before:blueGradient";

  if (pathname.length === 1 && title === "About me") {
    logicalController.displayBottomStyle = bottomStyle;
  } else if (pathname.includes(title.toLowerCase())) {
    logicalController.displayBottomStyle = bottomStyle;
  }

  return (
    <Link
      href={formatRedirectPath(title)}
      className={`relative w-full flex items-center justify-center py-2 gap-2 rounded-3xl text-lg text-center cursor-pointer hover:bg-primary-transparent 
        ${logicalController.displayBottomStyle}
      `}
    >
      <IconRetriever
        iconName={title}
        style="[&_path]:stroke-[#ffffff]"
        width={25}
        height={25}
        pathVariant="headerIcons\"
      />
      <span>{title}</span>
    </Link>
  );
}
