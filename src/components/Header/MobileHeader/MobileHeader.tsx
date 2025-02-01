import { MobileHeaderItem } from "./MobileHeaderItem/MobileHeaderItem";
import applicationData from "../../../data/applicationData.json";
import styles from "../../../styles/globalStyles.module.css";

export function MobileHeader() {
  return (
    <div
      className={`fixed w-full h-[75px] top-0 flex items-center z-10 border-0 ${styles.glass}`}
    >
      <nav className="flex flex-row justify-around w-full">
        {applicationData.header.options.slice(0,3).map(
          (option: { title: string }, index: number) => (
            <MobileHeaderItem key={index} title={option.title} />
          )
        )}
      </nav>
    </div>
  );
}
