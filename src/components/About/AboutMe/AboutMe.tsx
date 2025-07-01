import { ContactInfo } from "../ContactInfo/ContactInfo";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section className="w-full flexColCentered gap-[10vh] p-[10%]">
      <h2>About Me</h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <p className="w-full lg:w-1/2 text-lg">
          <span>{applicationData.about_me.text}</span>
        </p>
      </div>
        <ContactInfo />
    </section>
  );
}
