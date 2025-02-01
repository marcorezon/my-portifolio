import Image from "next/image";
import applicationData from "../../../data/applicationData.json";

export function Experiences() {
  return (
    <section className="w-full flexColCentered">
      <h2>Experiences</h2>
      <div className="w-full flex flex-col justify-start gap-7 px-[10%] py-[5%]">
        {applicationData.about_me.experiences.map((experience, index) => (
          <div
            key={index}
            className="flex items-center justify-start items-start border-b border-primary-transparent py-3 gap-5"
          >
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="flex flex-col justify-start">
              <span>{experience.details.role}</span>
              <span>{experience.company}</span>
              <span className="text-sm">{experience.details.period}</span>
              <span className="text-sm">• {experience.details.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
