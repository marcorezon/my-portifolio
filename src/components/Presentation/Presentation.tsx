import { PresentationHeader } from "./PresentationHeader/PresentationHeader";
import { AboutMe } from "./AboutMe/AboutMe";
import { Experiences } from "./Experiences/Experiences";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-transparent gap-20 lg:gap-0">
      <PresentationHeader />
      <div className="max-w-[1200px] bg-primary-white">
        <AboutMe />
        <Experiences />
      </div>
    </section>
  );
}
