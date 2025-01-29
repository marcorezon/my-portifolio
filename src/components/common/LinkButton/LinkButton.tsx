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
      className="w-fit h-fit flex justify-center items-center bg-primary-white cursor-pointer p-5 rounded-full hover:scale-105"
    >
      {iconName !== null && <IconRetriever iconName={iconName} />}
      <span className="text-primary-dark">{text}</span>
    </Link>
  );
}
