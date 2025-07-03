import { ProjectProps } from "@/shared/interfaces";
import { BackButton } from "../../BackButton/BackButton";
import { IconRetriever } from "../../IconRetriever/IconRetriever";
import styles from "../../../../styles/globalStyles.module.css";

export function ProjectDisplayerModal({
  project,
  handleClick,
}: {
  project: ProjectProps;
  handleClick: () => void;
}) {
  return (
    <div className="fixed w-[100vw] flex items-center justify-center md:top-0 md:h-full">
      <div
        className={`relative w-[90vw] h-[calc(90svh-75px)] flex flex-col gap-8 p-10 rounded-3xl md:w-[50vw] md:h-[50vh] ${styles.glass} ${styles.darkGlass}`}
      >
        <span className="w-full flex items-center justify-between">
          <BackButton handleClick={handleClick} style="self-start" />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            Check it on GitHub
            <IconRetriever iconName="github" />
          </a>
        </span>
        <div className="overflow-y-scroll">
          <h2>{project.title}</h2>
          <div className="flexColCenter">
            <p className="my-8">{project.subtitle}</p>
            <p>
              Stacks:{" "}
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech} </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
