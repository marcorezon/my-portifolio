import { ProjectDisplayer } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayer";
import applicationData from "../../data/applicationData.json";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-[5vh] xs:py-[5vh] md:p-[5vw]">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-content-between">
        {applicationData.projects.map((project, index) => (
          <ProjectDisplayer key={index} project={project} styles="m-5" />
        ))}
      </div>
    </div>
  );
}
