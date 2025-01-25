"use client";

import Image from "next/image";
import { ListHeaderItem } from "./ListHeaderItem/ListHeaderItem";
import applicationData from "../../data/applicationData.json";
import styles from "./Header.module.css";
import { useScreenSize } from "@/hooks/useScreenSize";
import { MobileHeader } from "./MobileHeader/MobileHeader";

export function Header() {
  const screenSize = useScreenSize();

  if (screenSize.isMobile) {
    return <MobileHeader />;
  }

  return (
    <div
      className={`fixed flex items-center justify-evenly w-full 
        h-[75px] bg-primary-dark z-10 ${styles.glass}`}
    >
      <span className="text-lg flex gap-2 items-center font-semibold">
        <Image
          src="\images\codingLogo.svg"
          alt="Coding icon"
          width={24}
          height={24}
        />
        {applicationData.header.name}
      </span>
      <ol className="flex flex-row items-center justify-around rounded-3xl bg-primary-transparent xs:w-[70%] xl:w-[40%]">
        {applicationData.header.options.map(
          (option: { title: string }, index: number) => (
            <ListHeaderItem key={index} title={option.title} />
          )
        )}
      </ol>
    </div>
  );
}
