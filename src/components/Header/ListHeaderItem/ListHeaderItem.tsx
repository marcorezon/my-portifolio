"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import formatRedirectPath from "@/shared/functions/formatRedirectPath";

export function ListHeaderItem({ title }: { title: string }) {
  const pathname = usePathname();

  const logicalController = { displayBottomStyle: "", borderFormat: null };
  const bottomStyle =
    "before:absolute before:bottom-0 before:h-1 before:min-w-[2rem] before:rounded-md before:bg-white";

  if (pathname.length === 1 && title === "Home") {
    logicalController.displayBottomStyle = bottomStyle;
  } else if (pathname.includes(title.toLowerCase())) {
    logicalController.displayBottomStyle = bottomStyle;
  }

  return (
    <Link
      href={formatRedirectPath(title)}
      className={`relative w-full flex items-center justify-center py-2 gap-2 rounded-3xl text-sm text-center cursor-pointer hover:bg-primary-transparent hover:scale-105 
        ${logicalController.displayBottomStyle}
      `}
    >
      <span>{title}</span>
    </Link>
  );
}
