import Image from "next/image";

export function MarcoLogo({
  styles = "",
  isAcronym = false,
  isSmaller,
}: {
  styles?: string;
  isAcronym?: boolean;
  isSmaller?: boolean;
}) {
  const size = isSmaller ? 100 : 150;
  return (
    <Image
      src={`/images/headerIcons/${
        isAcronym ? "mr-logo.svg" : "marco-logo.svg"
      }`}
      alt="Marco Rezon logo"
      width={size}
      height={size}
      className={styles}
    />
  );
}
