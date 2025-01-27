import { ProjectProps } from "@/shared/interfaces";

export function ProjectDisplayerModal({
  project,
  handleClick,
}: {
  project: ProjectProps;
  handleClick: () => void;
}) {
  return (
    <div
      onClick={handleClick}
      className="fixed top-0 w-[100vw] h-[100vh] flex items-center justify-center"
    >
      <div className="w-[50vw] h-[50vh] bg-primary-dark p-10 rounded-3xl">
        {Object.entries(project).map(([key, value], index) => (
          <li key={index}>
            {key}: {value}
          </li>
        ))}
      </div>
    </div>
  );
}
