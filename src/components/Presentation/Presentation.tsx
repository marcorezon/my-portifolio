import Image from "next/image";
import { PresentationFooter } from "./PresentationFooter/PresentationFooter";
import applicationData from "../../data/applicationData.json";
import { ListItem } from "../common/ListItem/ListItem";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-around justify-center bg-transparent">
      <main className="h-full flex flex-wrap items-center justify-around">
        <div className="flex flex justify-around gap-7">
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
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Front-end Developer</h2>
            <ol>
              <li>Hello.</li>
              <li>My name is Marco</li>
            </ol>

            <div>
              <p className="font-semibold text-lg">Technologies</p>
              <ul className="flex gap-2">
                {applicationData.technologies.map(
                  (
                    technology: { name: string; path: string },
                    index: number
                  ) => (
                    <ListItem
                      key={index}
                      name={technology.name}
                      path={technology.path}
                    />
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <PresentationFooter />
    </section>
  );
}
