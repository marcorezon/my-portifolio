import Image from "next/image";

interface ListItemProps {
  name: string;
  path: string;
}

export function ListItem({ name, path}: ListItemProps) {
  return (
    <li className="flex items-center font-semibold text-md w-fit line-clamp-1 p-2 rounded bg-primary-light_grey gap-2">
      <Image src={path} width={20} height={20} alt={`${name} logo`}/>
      {name}
    </li>
  );
}
