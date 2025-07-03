import Image from "next/image";

export function MarcoLogo({ styles = "" }: { styles?: string }) {
  return (
    <Image
      src="/images/headerIcons/marco-logo.svg"
      alt="Marco Rezon logo"
      width={150}
      height={150}
      className={styles}
    />
  );
}
