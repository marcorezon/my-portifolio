import Image from "next/image";
import { ListItem } from "@/components/common/ListItem/ListItem";
import styles from "../../../styles/globalStyles.module.css";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section
      className={`w-full min-h-screen flex flex-wrap items-center justify-center ${styles.presentation}`}
    >
      <Image
        src="/images/profile.png"
        alt="Image"
        height={300}
        width={300}
        objectFit="cover"
        quality={100}
        className="rounded-full"
      />
      <div className="min-h-full flex flex-col gap-[4vh] px-8 lg:w-1/3">
        <p className="text-lg">
          <span>{applicationData.about_me.text}</span>
        </p>

        <div>
          <p className="text-xl mb-3">My professional skills</p>
          <ul className="flex flex-wrap gap-2">
            {applicationData.about_me.technologies.map(
              (technology: { name: string }, index: number) => (
                <ListItem key={index} name={technology.name} />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
