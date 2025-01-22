import Image from "next/image";
import { PresentationFooter } from "./PresentationFooter/PresentationFooter";
import { ListItem } from "../commom/ListItem/ListItem";
import applicationData from "../../data/applicationData.json";

export function Presentation() {
  return (
    <section className="w-full h-full">
      <main className="flex items-center justify-around">
        <div className="flex flex-col justify-around gap-7">
          <h2 className="text-xl font-bold">Front End developer</h2>
          <ol>
            <li>Hello.</li>
            <li>My name is Marco</li>
          </ol>

          <div>
            <p className="font-semibold text-lg">Technologies</p>
            <ul className="flex gap-2">
              {applicationData.technologies.map(
                (technology: { name: string; path: string }, index: number) => (
                  <ListItem key={index} name={technology.name} path={technology.path} />
                )
              )}
            </ul>
          </div>
        </div>

        <figure>
          <Image
            src="/images/profile.png"
            alt="Image"
            height={500}
            width={500}
            objectFit="cover"
          />
        </figure>
      </main>
      <PresentationFooter />
    </section>
  );
}
