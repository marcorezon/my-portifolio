import { AboutMe } from "@/components/About/AboutMe/AboutMe";
import { Education } from "@/components/About/Education/Education";
import { Experiences } from "@/components/About/Experiences/Experiences";
import { StacksDisplayer } from "@/components/About/AboutMe/StacksDisplayer/StacksDisplayer";

export default function About() {
  return (
    <div className="max-w-[1000px] h-full flexColCentered bg-primary-transparent gap-[5vh] m-auto">
      <AboutMe />
      <Education />
      <Experiences />
      <StacksDisplayer />
    </div>
  );
}
