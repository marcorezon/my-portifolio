import { IconRetriever } from "../IconRetriever/IconRetriever";

export function ListItem({ name }: { name: string }) {
  return (
    <li className="h-fit flex items-center rounded gap-2 cursor-pointer text-primary-dark	hover:scale-105">
      {name}
    </li>
  );
}
