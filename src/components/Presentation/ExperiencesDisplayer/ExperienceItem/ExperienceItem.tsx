import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";
import { Experience } from "@/shared/interfaces";

export function ExperienceItem({ company, details }: Experience) {
  return (
    <ul className="w-[300px] h-[250px] flex flex-col items-start justify-center bg-gradient-to-r from-primary-transparent to-secondary-blue gap-2 rounded-lg p-5">
      <li className="text-lg">{company}</li>
      {Object.entries(details).map(([key, value]) => {
        return (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </li>
        );
      })}
    </ul>
  );
}
