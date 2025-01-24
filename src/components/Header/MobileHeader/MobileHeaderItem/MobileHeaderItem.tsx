import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";

export function MobileHeaderItem({ title }: { title: string }) {
  return (
    <li className="h-full flex flex-col items-center justify-center">
      <IconRetriever
        iconName={title}
        style="[&_path]:stroke-[#ffffff]"
        width={25}
        height={25}
        pathVariant="headerIcons\"
      />
      <span className="font-semibold text-md text-white">{title}</span>
    </li>
  );
}
