import applicationData from "../../../data/applicationData.json";
import { ListHeaderItem } from "../ListHeaderItem/ListHeaderItem";
import styles from "../Header.module.css";

export function MobileHeader() {
  return (
    <div
      className={`fixed w-full h-[75px] bottom-0 z-10 ${styles.glass} border-0`}
    >
      <div className="w-full bg-primary-transparent shadow-lg">
        <ol className="flex flex-row items-center justify-around w-full">
          {applicationData.header.options.map(
            (option: { title: string }, index: number) => (
              <ListHeaderItem key={index} title={option.title} />
            )
          )}
        </ol>
      </div>
    </div>
  );
}
