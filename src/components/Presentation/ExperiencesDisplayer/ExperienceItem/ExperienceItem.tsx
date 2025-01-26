import { IconRetriever } from "@/components/common/IconRetriever/IconRetriever";
import { Experience } from "@/shared/interfaces";

export function ExperienceItem({ company, details }: Experience) {
  return (
    <ul className="h-fit flex items-center justify-center bg-gradient-to-r from-primary-transparent to-secondary-blue cursor-pointer gap-2 rounded-lg p-5 hover:scale-105">
      <li className="text-lg">{company}</li>
      {Object.entries(details)
        .slice(0, 0)
        .map(([key, value]) => {
          return (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </li>
          );
        })}
      <IconRetriever iconName="arrow-horizontal" width={24} height={24} />
    </ul>
  );
}
