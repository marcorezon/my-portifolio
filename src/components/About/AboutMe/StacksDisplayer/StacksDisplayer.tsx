import { ListItem } from "@/components/common/ListItem/ListItem";
import applicationData from "../../../../data/applicationData.json";

export function StacksDisplayer() {
  return (
    <div className="w-full h-fit flex items-center justify-center gap-5 p-[10%]">
      <div>
      <p className="text-xl mb-3">Front-end skils</p>
      <ul className="flex flex-wrap gap-5">
        {applicationData.about_me.technologies.map(
          (technology: { name: string }, index: number) => (
            <ListItem key={index} name={technology.name} />
          )
        )}
      </ul>
      </div>
    </div>
  );
}
