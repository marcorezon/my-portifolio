import { IconRetriever } from "../IconRetriever/IconRetriever";

export function ListItem({ name }: { name: string }) {
  return (
    <li className="h-fit flex items-center p-2 rounded bg-primary-transparent gap-2 cursor-pointer	hover:scale-105">
      <IconRetriever iconName={name} />
      {name}
    </li>
  );
}
