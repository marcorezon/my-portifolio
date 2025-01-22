import Image from "next/image";

interface ListItemProps {
  name: string;
  path: string;
}

export function ListItem({ name, path }: ListItemProps) {
  return (
    <li className="flex items-center font-semibold text-md p-2 rounded bg-primary-light_grey gap-2 cursor-pointer	hover:scale-105">
      <Image src={path} width={20} height={20} alt={`${name} logo`} />
      {name}
    </li>
  );
}
