import Image from "next/image";
import applicationData from "../../../data/applicationData.json";
import exp from "constants";

export function Experiences() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-[10vh]">
      <h4>Experience</h4>
      <div className="w-fit flex flex-col justify-start gap-7">
        {applicationData.about_me.experiences.map((experience, index) => (
          <div key={index} className="flex items-center justify-start gap-5 items-start">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={70}
              height={70}
              objectFit="cover"
            />
            <div className="flex flex-col justify-start">
              <span className="text-lg">{experience.details.role}</span>
              <span>
                {experience.company} {experience.details.type}
              </span>
              <span>{experience.details.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
