import applicationData from "../../../data/applicationData.json";
import { PresentationFooterItem } from "./PresentationFooterItem/PresentationFooter";

export function PresentationFooter() {
  return (
    <footer className="flex items-center justify-center gap-6">
      {applicationData.presentationFooter.items.map(
        (item: { title: string; path: string }, index: number) => (
          <PresentationFooterItem
            key={index}
            title={item.title}
            path={item.path}
          />
        )
      )}
    </footer>
  );
}
