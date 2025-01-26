import { Experience } from "@/shared/interfaces";
import Image from "next/image";

export function ExperienceItem({ company, logo, details }: Experience) {
  return (
    <ul className="w-fit h-[250px] flex flex-col items-start justify-center gap-2 rounded-lg">
      <Image src={logo} width={100} height={100} alt={`${company} logo`} />
      <li className="text-xl">{company}</li>
      <div className="relative left-5">
        {Object.entries(details).map(([key, value]) => {
          return (
            <li key={key} className="text-secondary-translucidWhite">
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </li>
          );
        })}
      </div>
    </ul>
  );
}
