import Image from "next/image";
import { ListItem } from "@/components/common/ListItem/ListItem";
import styles from "../../../styles/globalStyles.module.css";
import applicationData from "../../../data/applicationData.json";
import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";

export function AboutMe() {
  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center justify-center gap-10 ${styles.presentation}`}
    >
      <h2>About Me</h2>
      <p className="w-1/2 text-lg">
        <span>{applicationData.about_me.text}</span>
      </p>
      <div className="w-full flex items-center justify-around gap-2">
        <div className="w-fit h-fit flex flex-col items-start justify-center bg-primary-dark rounded-3xl gap-5 p-[60px]">
          <IconRetriever iconName="coding" width={40} height={40}/>
          <p className="text-xl mb-3">Front-end Develpment</p>
          <ul className="flex flex-col gap-5">
            {applicationData.about_me.technologies.map(
              (technology: { name: string }, index: number) => (
                <ListItem key={index} name={technology.name} />
              )
            )}
          </ul>
        </div>
        <div className="rounded-3xl">
          <Image
            src="/images/profile.png"
            alt="Image"
            height={300}
            width={300}
            objectFit="cover"
            quality={100}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
