import Image from "next/image";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section className="w-full flexColCentered gap-[10vh] p-[10%]">
      <h2>About Me</h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Image
          src="/images/profile.png"
          width={200}
          height={200}
          alt="Profile picture"
          objectFit="cover"
          quality={100}
          className="rounded-3xl"
        />
        <p className="w-full lg:w-1/2 text-lg">
          <span>{applicationData.about_me.text}</span>
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-around gap-10">
        <ContactInfo />
        <div className="flexColCentered">
          <span className="text-sm text-primary-grey">
            {applicationData.about_me.age}
          </span>
          <span className="text-sm text-primary-grey">
            {applicationData.about_me.location}
          </span>
        </div>
      </div>
    </section>
  );
}
