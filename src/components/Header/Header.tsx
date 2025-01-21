import { ListItem } from "./ListItem/ListItem";

export function Header() {
  return (
    <div
      className="fixed flex items-center justify-center w-full 
        h-[70px] bg-primary-black"
    >
      <div className="w-[80%] py-4 bg-gradient-to-r from-primary-dark to-primary-grey rounded-3xl shadow-primary-grey shadow-md">
        <ol className="flex flex-row items-center justify-around px-5 w-full">
          <span>
            <ListItem>Marco Rêzon</ListItem>
          </span>
          <span className="flex flex-row items-center justify-evenly w-full">
            <ListItem>About me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Components</ListItem>
          </span>
        </ol>
      </div>
    </div>
  );
}
