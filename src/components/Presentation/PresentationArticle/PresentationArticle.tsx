import { Article } from "@/components/common/Article/Article";
import { ProjectDisplayer } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayer";
import applicationData from "../../../data/applicationData.json";
import { ProjectsProps } from "@/shared/interfaces";

export function PresentationArticle() {
  return (
    <section className="w-full flex flex-col items-start gap-[5vh] my-6">
      <h3 className="text-2xl font-bold ml-[15vw]">Last project</h3>
      <div className="w-full max-w-[1043px] self-center flex flex-wrap items-center justify-evenly gap-8">
        <Article />
        {applicationData.projects.map((project, index) => (
          <ProjectDisplayer key={index} {...(project as ProjectsProps)} />
        ))}
      </div>
    </section>
  );
}
