import { AboutMe } from "@/components/About/AboutMe/AboutMe";
import { ContactInfo } from "@/components/About/ContactInfo/ContactInfo";
import { Education } from "@/components/About/Education/Education";
import { Experiences } from "@/components/About/Experiences/Experiences";

export default function About() {
  return (
    <div className="max-w-[1200px] h-full flexColCentered bg-primary-transparent gap-[5vh] m-auto">
      <AboutMe />
      <Education />
      <Experiences />
      <ContactInfo />
    </div>
  );
}
