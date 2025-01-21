interface ListItemProps {
    children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="w-fit line-clamp-1">{children}</li>
  );
}