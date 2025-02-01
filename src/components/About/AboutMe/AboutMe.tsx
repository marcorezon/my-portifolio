import applicationData from "../../../data/applicationData.json";
import { StacksDisplater } from "./StacksDisplayer/StacksDisplayer";

export function AboutMe() {
  return (
    <section className="w-full flexColCentered gap-[10vh] p-[10%]">
      <div className="flexColCentered">
        <h2>About Me</h2>
        <p className="w-1/2 text-lg">
          <span>{applicationData.about_me.text}</span>
        </p>
      </div>
      <StacksDisplater />
    </section>
  );
}
