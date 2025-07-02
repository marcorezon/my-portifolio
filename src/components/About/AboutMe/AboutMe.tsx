import { ContactInfo } from "../ContactInfo/ContactInfo";
import applicationData from "../../../data/applicationData.json";

export function AboutMe() {
  return (
    <section className="w-full flexColCentered gap-[10vh] p-[10%]">
      <h2>About Me</h2>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10">
        <p className="w-full lg:w-1/2 text-lg">
          <span>{applicationData.about_me.text}</span>
        </p>
        <a
          href="/files/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2"
        >
          Resume
        </a>
      </div>
      <ContactInfo />
    </section>
  );
}
