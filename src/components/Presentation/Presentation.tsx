import { PresentationHeader } from "./PresentationHeader/PresentationHeader";
import { AboutMe } from "./AboutMe/AboutMe";
import { PresentationArticle } from "./PresentationArticle/PresentationArticle";

export function Presentation() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-transparent gap-20 lg:gap-0">
      <PresentationHeader />
      <AboutMe />
      <PresentationArticle />
    </section>
  );
}
