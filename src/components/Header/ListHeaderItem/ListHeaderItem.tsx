interface ListItemProps {
  children: React.ReactNode;
}

export function ListHeaderItem({ children }: ListItemProps) {
  return (
    <li className="w-full font-semibold text-lg text-center py-2 cursor-pointer hover:bg-primary-light_grey hover:opacity-70">
      <a>{children}</a>
    </li>
  );
}
