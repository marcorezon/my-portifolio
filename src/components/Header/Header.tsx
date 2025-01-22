import Image from "next/image";
import { ListHeaderItem } from "./ListHeaderItem/ListHeaderItem";
import applicationData from "../../data/applicationData.json";

export function Header() {
  const shadowStyle =
    "bg-gradient-to-r from-primary-black to-primary-dark shadow-black shadow-md";

  return (
    <div
      className="flex items-center justify-evenly w-full 
        h-[75px] bg-primary-dark"
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
      <div
        className={`w-[40%] rounded-md border-primary-light_grey ${shadowStyle}`}
      >
        <ol className="flex flex-row items-center justify-around w-full">
          {applicationData.header.options.map(
            (option: { title: string }, index: number) => (
              <ListHeaderItem key={index}>{option.title}</ListHeaderItem>
            )
          )}
        </ol>
      </div>
    </div>
  );
}
