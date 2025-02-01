export default function formatRedirectPath(title: string) {
  if (title === "Home") {
    return "/";
  } else if (title.split(" ").length === 2) {
    return "/about-me";
  }
  return `/${title.toLocaleLowerCase()}`;
}
