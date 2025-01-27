import { MobileHeaderItem } from "./MobileHeaderItem/MobileHeaderItem";
import applicationData from "../../../data/applicationData.json";
import styles from "../../../styles/globalStyles.module.css";

export function MobileHeader() {
  return (
    <div
      className={`fixed w-full h-[75px] bottom-0 flex items-center z-10 bg-white border-0 ${styles.glass}`}
    >
      <nav className="flex flex-row justify-around w-full">
        {applicationData.header.options.map(
          (option: { title: string }, index: number) => (
            <MobileHeaderItem key={index} title={option.title} />
          )
        )}
      </nav>
    </div>
  );
}
