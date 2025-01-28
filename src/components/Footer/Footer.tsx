import applicationData from "../../data/applicationData.json";
import { FooterItem } from "./FooterItem/FooterItem";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6">
      {applicationData.presentationFooter.items.map(
        (item: { title: string; path: string }, index: number) => (
          <FooterItem key={index} title={item.title} />
        )
      )}
    </footer>
  );
}
