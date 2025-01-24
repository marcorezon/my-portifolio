import Image from "next/image";

interface IconRetrieverProps {
  iconName: string;
  style?: string;
  width?: number;
  height?: number;
  pathVariant?: string;
}

export function IconRetriever({
  iconName,
  style = "",
  width,
  height,
  pathVariant = "",
}: IconRetrieverProps) {
  const pathFormatter = `\\images\\${pathVariant}${iconName
    .split(".")[0]
    .split(" ")[0]
    .toLocaleLowerCase()}.svg`;
  return (
    <div>
      <Image
        className={style}
        src={pathFormatter}
        width={width ? width : 20}
        height={height ? height : 20}
        alt={`${iconName} icon`}
      />
    </div>
  );
}
