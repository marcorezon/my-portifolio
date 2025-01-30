import Link from "next/link";
import { IconRetriever } from "../IconRetriever/IconRetriever";

interface LinkButtonProps {
  path: string;
  text?: string;
  iconName?: string;
  isExternal?: boolean;
  colorVariant?: "normal" | "inverted";
  style?: string;
}

export function LinkButton({
  path,
  text,
  iconName,
  isExternal,
  colorVariant = "normal",
  style = "",
}: LinkButtonProps) {
  const colorVariantControler = {
    containerStyle: "border border-primary-white",
    textStyle: "",
  };

  if (colorVariant === "inverted") {
    colorVariantControler.containerStyle = "bg-primary-white";
    colorVariantControler.textStyle = "text-primary-dark";
  }

  return (
    <Link
      href={path}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={`w-fit h-fit flex justify-center items-center cursor-pointer gap-2 p-4 rounded-full hover:scale-105 ${colorVariantControler.containerStyle} ${style}`}
    >
      {iconName && <IconRetriever iconName={iconName} width={24} height={24} />}
      {text && <span className={colorVariantControler.textStyle}>{text}</span>}
    </Link>
  );
}
