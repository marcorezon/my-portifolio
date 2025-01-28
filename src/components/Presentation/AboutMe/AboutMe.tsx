import Image from "next/image";
import { ListItem } from "@/components/common/ListItem/ListItem";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section className="w-full h-screen flex flex-wrap items-center justify-center">
      <Image
        src="/images/profile.png"
        alt="Image"
        height={300}
        width={300}
        objectFit="cover"
        quality={100}
        className="rounded-full"
      />
      <div>
        <p>
          <span>{applicationData.about_me.initial_message}</span>
          <br />
          <span>{applicationData.about_me.text}</span>
        </p>

        <div>
          <p className="text-xl mb-3">Technologies:</p>
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
