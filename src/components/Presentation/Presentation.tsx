import Image from "next/image";
import { ListItem } from "../common/ListItem/ListItem";
import { PresentationFooter } from "./PresentationFooter/PresentationFooter";
import { PresentationArticle } from "./PresentationArticle/PresentationArticle";
import applicationData from "../../data/applicationData.json";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-transparent gap-20">
      <main className="flex flex-wrap items-center justify-around">
        <div className="flex flex flex-wrap justify-around gap-7">
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
            <h2 className="text-3xl font-bold">
              {applicationData.about_me.role}
            </h2>
            <p className="font-semibold text-md">
              <span>{applicationData.about_me.initial_message}</span>
              <br />
              <span>{applicationData.about_me.text}</span>
            </p>

            <div>
              <p className="font-semibold text-xl mb-3">Technologies:</p>
              <ul className="flex flex-wrap gap-2">
                {applicationData.about_me.technologies.map(
                  (technology: { name: string }, index: number) => (
                    <ListItem key={index} name={technology.name} />
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <PresentationArticle />
      <PresentationFooter />
    </section>
  );
}
