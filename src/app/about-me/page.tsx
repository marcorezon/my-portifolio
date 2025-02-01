import { AboutMe } from "@/components/About/AboutMe/AboutMe";
import { Experiences } from "@/components/About/Experiences/Experiences";
import applicationData from "../../data/applicationData.json";
import { Education } from "@/components/About/Education/Education";

export default function About() {
  return (
    <div className="max-w-[1200px] h-full flex flex-col items-center justify-center bg-primary-transparent m-auto">
      <AboutMe />
      <Education />
      <Experiences />
      <div>
        <h1>Contact</h1>
        <div className="w-fit h-full flex flex-col items-start justify-center">
          {Object.entries(applicationData.contact).map(
            ([key, value], index) => (
              <code key={index}>
                const {key} = "{value}"
              </code>
            )
          )}
        </div>
      </div>
    </div>
  );
}
