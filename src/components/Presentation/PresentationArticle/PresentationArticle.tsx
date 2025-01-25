import { Article } from "@/components/common/Article/Article";
import { ProjectDisplayer } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayer";
import applicationData from "../../../data/applicationData.json";
import styles from "./PresentationArticle.module.css";
import { ProjectsProps } from "@/shared/interfaces";

export function PresentationArticle() {
  const lastProjectIndex = applicationData.projects.length - 1;
  const lastProject = applicationData.projects[lastProjectIndex];

  return (
    <section
      className={`w-full flex flex-col items-start gap-[5vh] my-6 ${styles.presentation}`}
    >
      <h3 className="text-2xl font-bold ml-[15vw]">Last project</h3>
      <div className="w-full max-w-[1043px] self-center flex flex-wrap items-center justify-evenly gap-8">
        <Article />
        <ProjectDisplayer project={lastProject as ProjectsProps} />
      </div>
    </section>
  );
}
