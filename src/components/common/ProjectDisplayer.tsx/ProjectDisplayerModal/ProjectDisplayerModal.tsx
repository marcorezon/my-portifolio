import { ProjectProps } from "@/shared/interfaces";
import { BackButton } from "../../BackButton/BackButton";
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
        className={`relative w-[90vw] h-[calc(90svh-75px)] flex flex-col gap-8 p-10 rounded-3xl md:w-[50vw] md:h-[50vh] ${styles.glass}`}
      >
          <BackButton handleClick={handleClick} style="self-end" />
        <div className="overflow-y-scroll">
          {Object.entries(project).map(([key, value], index) => (
            <span key={index}>
              {key}: {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
