import { PresentationHeader } from "./PresentationHeader/PresentationHeader";
import { ProjectsCarousel } from "./ProjectsCarousel/ProjectsCarousel";
import { AboutMe } from "./AboutMe/AboutMe";
import { Experiences } from "./Experiences/Experiences";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-transparent gap-20 lg:gap-0">
      <PresentationHeader />
      <ProjectsCarousel />
      <AboutMe />
      <Experiences />
    </section>
  );
}
