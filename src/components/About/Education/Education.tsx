import Image from "next/image";
import applicationData from "../../../data/applicationData.json";

export function Education() {
  return (
    <section className="w-full flexColCentered">
      <h2>Education</h2>
      <div className="w-full flex flex-col justify-start gap-7 px-[10%] py-[5%]">
        {applicationData.about_me.education.map((educationItemm, index) => (
          <div
            key={index}
            className="flex items-center justify-start items-start border-b border-primary-lightTransparent py-3 gap-5"
          >
            <Image
              src={educationItemm.logo}
              alt={`${educationItemm.institution} logo`}
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-lg"
            />

            <div className="flex flex-col justify-start">
              <span>{educationItemm.institution}</span>
              <span>{educationItemm.degree}</span>
              <span className="text-sm">{educationItemm.identification}</span>
              <span className="text-sm">
                • {educationItemm["start date"]} - {educationItemm["end date"]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
