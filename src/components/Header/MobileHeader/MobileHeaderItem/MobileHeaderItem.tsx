import Link from "next/link";
import { usePathname } from "next/navigation";
import formatRedirectPath from "@/shared/functions/formatRedirectPath";

export function MobileHeaderItem({ title }: { title: string }) {
  const pathname = usePathname();

  const logicalController = { displayBottomStyle: "", borderFormat: null };
  const bottomStyle =
    "before:absolute before:bottom-3 before:h-1 before:min-w-[2rem] before:rounded-md before:bg-white";

  if (pathname.length === 1 && title === "Home") {
    logicalController.displayBottomStyle = bottomStyle;
  } else if (pathname.includes(title.replace(" ", "-").toLowerCase())) {
    logicalController.displayBottomStyle = bottomStyle;
  }

  return (
    <Link
      href={formatRedirectPath(title)}
      tabIndex={0}
      className={`h-full w-full flexColCentered p-2 rounded-full focus:bg-primary-transparent ${logicalController.displayBottomStyle}`}
    >
      <span className="text-sm text-white">{title}</span>
    </Link>
  );
}
