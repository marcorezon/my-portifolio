import { AboutMe } from "@/components/About/AboutMe/AboutMe";
import { ContactInfo } from "@/components/About/ContactInfo/ContactInfo";
import { Education } from "@/components/About/Education/Education";
import { Experiences } from "@/components/About/Experiences/Experiences";

export default function About() {
  return (
    <div className="max-w-[1200px] h-full flex flex-col items-center justify-center bg-primary-transparent gap-[5vh] m-auto">
      <AboutMe />
      <ContactInfo />
      <Education />
      <Experiences />
    </div>
  );
}
