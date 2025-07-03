"use client";

import { MobileHeader } from "./MobileHeader/MobileHeader";
import { ListHeaderItem } from "./ListHeaderItem/ListHeaderItem";
import { useScreenSize } from "@/hooks/useScreenSize";
import { MarcoLogo } from "../common/MarcoLogo/MarcoLogo";
import applicationData from "../../data/applicationData.json";
import styles from "../../styles/globalStyles.module.css";

export function Header() {
  const screenSize = useScreenSize();

  if (screenSize.isMobile) {
    return <MobileHeader />;
  }

  return (
    <div
      className={`fixed w-full h-[75px] flex items-center justify-around z-10 ${styles.glass}`}
    >
      <MarcoLogo />
      <nav className="flex flex-row items-center justify-around xs:w-[70%] xl:w-[40%]">
        {applicationData.header.options.map(
          (option: { title: string }, index: number) => (
            <ListHeaderItem key={index} title={option.title} />
          )
        )}
      </nav>
    </div>
  );
}
