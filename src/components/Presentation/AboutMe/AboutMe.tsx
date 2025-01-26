import Image from "next/image";
import { ListItem } from "@/components/common/ListItem/ListItem";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section className="min-h-[70vh] flex flex-wrap items-center justify-around gap-7 lg:h-[80vh]">
      <div>
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
      <div className="max-w-[560px] flex flex-col justify-center gap-6 p-10">
        <h1 className="font-bold">{applicationData.about_me.role}</h1>
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
