import Image from "next/image";
import { IconRetriever } from "../IconRetriever/IconRetriever";
import { ProjectProps } from "@/shared/interfaces";

export function ProjectDisplayer({
  project,
  isFunctional,
  handleClick = null,
}: {
  project: ProjectProps;
  isFunctional?: boolean;
  handleClick?: ((project: ProjectProps) => void) | null;
}) {
  const functionalStyle = "cursor-pointer m-5 hover:scale-[1.05]";

  return (
    <div
      {...(handleClick ? { onClick: () => handleClick(project) } : {})}
      tabIndex={isFunctional ? 0 : -1}
      className={`relative flex flex-col w-[300px] min-h-[300px] bg-primary-transparent rounded-md p-3 gap-4 shadow-lg ${
        isFunctional ? functionalStyle : ""
      }`}
    >
      <Image
        src="https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"
        height={550}
        width={450}
        className="rounded-md"
        alt="Project image"
      />
      {!isFunctional && (
        <p className="text-sm text-secondary-silver">{project.subtitle}</p>
      )}
      <h4>{project.title}</h4>
      <hr />
      <div className="flex gap-4">
        {project.technologies.map((name, index) => (
          <IconRetriever key={index} iconName={name} height={25} width={25} />
        ))}
      </div>
    </div>
  );
}
