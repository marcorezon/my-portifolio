import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import applicationData from "../../../data/applicationData.json";

export function ExperiencesDisplayer() {
  return (
    <section className="w-[70%] m-auto">
      <h2 className="text-2xl">Experiences</h2>
      <div className="flex justify-center items-center flex-wrap gap-5 my-6">
        {applicationData.about_me.experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}
