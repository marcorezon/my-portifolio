export default function formatRedirectPath(title: string) {
    if (title.split(" ").length === 2) {
      return "/";
    }
    return `/${title.toLocaleLowerCase()}`;
  }