interface ListItemProps {
  children: React.ReactNode;
}

export function ListHeaderItem({ children }: ListItemProps) {
  return (
    <li className="w-full font-semibold text-lg text-center py-2 cursor-pointer hover:bg-primary-grey">
      <a>{children}</a>
    </li>
  );
}
