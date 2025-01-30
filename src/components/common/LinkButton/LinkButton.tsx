import Link from "next/link";
import { IconRetriever } from "../IconRetriever/IconRetriever";

interface LinkButtonProps {
  path: string;
  text: string;
  iconName?: string | null;
  isIconInline?: boolean;
  isExternal?: boolean;
}

export function LinkButton({
  path,
  text,
  iconName = null,
  isIconInline,
  isExternal,
}: LinkButtonProps) {
  return (
    <Link
      href={path}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="w-fit h-fit flex justify-center items-center border border-primary-white cursor-pointer gap-2 p-4 rounded-full hover:scale-105"
    >
      {iconName !== null && (
        <IconRetriever iconName={iconName} width={24} height={24} />
      )}
      <span>{text}</span>
    </Link>
  );
}
