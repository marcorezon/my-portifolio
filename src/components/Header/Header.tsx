import Image from "next/image";
import { ListHeaderItem } from "./ListHeaderItem/ListHeaderItem";
import applicationData from "../../data/applicationData.json";
import styles from "./Header.module.css";

export function Header() {
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
      <div className="rounded-3xl bg-primary-transparent xs:w-[70%] xl:w-[40%] shadow-lg">
        <ol className="flex flex-row items-center justify-around w-full">
          {applicationData.header.options.map(
            (option: { title: string }, index: number) => (
              <ListHeaderItem key={index} title={option.title}/>
            )
          )}
        </ol>
      </div>
    </div>
  );
}
