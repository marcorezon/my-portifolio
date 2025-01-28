import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";
import formatRedirectPath from "@/shared/functions/formatRedirectPath";

export function MobileHeaderItem({ title }: { title: string }) {
  const pathname = usePathname();

  const logicalController = { displayBottomStyle: "", borderFormat: null };
  const bottomStyle =
    "before:absolute before:bottom-2 before:h-1 before:min-w-[3rem] before:rounded-md before:blueGradient";

  if (pathname.length === 1 && title === "About me") {
    logicalController.displayBottomStyle = bottomStyle;
  } else if (pathname.includes(title.toLowerCase())) {
    logicalController.displayBottomStyle = bottomStyle;
  }

  return (
    <Link
      href={formatRedirectPath(title)}
      tabIndex={0}
      className={`h-full w-full flex flex-col items-center justify-center p-2 rounded-full focus:bg-primary-transparent ${logicalController.displayBottomStyle}`}
    >
      <IconRetriever
        iconName={title}
        style="[&_path]:stroke-[#ffffff]"
        width={25}
        height={25}
        pathVariant="headerIcons\"
      />
      <span className="text-sm text-white">{title}</span>
    </Link>
  );
}
