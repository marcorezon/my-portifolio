import Image from "next/image";
import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";

interface PresentationFooterItemProps {
  title: string;
  path: string;
}

export function PresentationFooterItem({
  title,
  path,
}: PresentationFooterItemProps) {
  return (
    <a
      className="flex items-center justify-center gap-1 hover:scale-105"
      href="https://github.com/marcorezon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconRetriever
        iconName={title}
        width={24}
        height={24}
      />
      {title}
    </a>
  );
}
