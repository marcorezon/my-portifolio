import { Experience } from "@/shared/interfaces";

export function ExperienceItem({ company, details }: Experience) {
  return (
    <ul className="w-fit h-[250px] flex flex-col items-start justify-center gap-2 rounded-lg">
      <li className="text-xl">{company}</li>
      <div className="relative left-5">
        {Object.entries(details).map(([key, value]) => {
          return (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </li>
          );
        })}
      </div>
    </ul>
  );
}
