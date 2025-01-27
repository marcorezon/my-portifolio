import { ProjectProps } from "@/shared/interfaces";
import { BackButton } from "../../BackButton/BackButton";

export function ProjectDisplayerModal({
  project,
  handleClick,
}: {
  project: ProjectProps;
  handleClick: () => void;
}) {
  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[50vw] h-[50vh] flex flex-col bg-gradient-to-r from-secondary-blue to-secondary-lightBlue gap-8 p-10 rounded-3xl">
        <BackButton handleClick={handleClick} style="self-end"/>
        {Object.entries(project).map(([key, value], index) => (
          <li key={index}>
            {key}: {value}
          </li>
        ))}
      </div>
    </div>
  );
}
