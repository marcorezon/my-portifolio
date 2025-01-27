import { Article } from "@/components/common/Article/Article";
import { ProjectDisplayer } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayer";
import styles from "../../../styles/globalStyles.module.css";
import applicationData from "../../../data/applicationData.json";
import { ProjectProps } from "@/shared/interfaces";

export function PresentationArticle() {
  const lastProjectIndex = applicationData.projects.length - 1;
  const lastProject = applicationData.projects[lastProjectIndex];

  return (
    <section
      className={`w-full flex flex-col items-start justify-center gap-[5vh] lg:h-[100vh] ${styles.presentation}`}
    >
      <h3 className="font-bold ml-[15vw]">Last project</h3>
      <div className="w-full max-w-[1043px] self-center flex flex-wrap items-center justify-evenly gap-8">
        <Article />
        <ProjectDisplayer project={lastProject as ProjectProps} />
      </div>
    </section>
  );
}
