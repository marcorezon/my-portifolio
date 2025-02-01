import { IconRetriever } from "../IconRetriever/IconRetriever";

export function ListItem({ name }: { name: string }) {
  return (
    <li className="h-fit flex items-center bg-primary-transparent rounded cursor-pointer p-2 gap-2	hover:scale-105">
      <IconRetriever iconName={name} />
      {name}
    </li>
  );
}
