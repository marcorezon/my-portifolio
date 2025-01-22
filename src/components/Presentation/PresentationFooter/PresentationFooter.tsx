import applicationData from "../../../data/applicationData.json";
import { PresentationFooterItem } from "./PresentationFooterItem/PresentationFooter";

export function PresentationFooter() {
  return (
    <footer className="flex items-center justify-start gap-4 ml-6 mb-6">
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
