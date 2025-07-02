import { IconRetriever } from "../IconRetriever/IconRetriever";

interface LinkButtonProps {
  path: string;
  text?: string;
  iconName?: string;
  isExternal?: boolean;
  style?: string;
}

export function LinkButton({
  path,
  text,
  iconName,
  isExternal,
  style = "",
}: LinkButtonProps) {
  

  return (
    <a
      href={path}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={`w-fit h-fit flex justify-center items-center cursor-pointer gap-2 p-4 rounded-full hover:scale-105 ${style}`}
    >
      {iconName && <IconRetriever iconName={iconName} width={24} height={24} />}
      {text && <span>{text}</span>}
    </a>
  );
}
