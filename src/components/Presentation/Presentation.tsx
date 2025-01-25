import { AboutMe } from "./AboutMe/AboutMe";
import { ExperiencesDisplayer } from "./ExperiencesDisplayer/ExperiencesDisplayer";
import { PresentationFooter } from "./PresentationFooter/PresentationFooter";
import { PresentationArticle } from "./PresentationArticle/PresentationArticle";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-transparent gap-20 lg:gap-0">
      <AboutMe />
      <PresentationArticle />
      <ExperiencesDisplayer />
      <PresentationFooter />
    </section>
  );
}
