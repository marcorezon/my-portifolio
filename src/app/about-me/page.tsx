import { Experiences } from "@/components/Presentation/Experiences/Experiences";
import applicationData from "../../data/applicationData.json";
import { AboutMe } from "@/components/Presentation/AboutMe/AboutMe";

export default function About() {
  return (
    <div className="max-w-[1200px] h-full flex flex-col items-center justify-center bg-primary-transparent m-auto">
      <h1>Contact</h1>
      <div className="w-fit h-full flex flex-col items-start justify-center">
        {Object.entries(applicationData.contact).map(([key, value], index) => (
          <code key={index}>
            const {key} = "{value}"
          </code>
        ))}
      </div>
      <AboutMe />
      <Experiences />
    </div>
  );
}
