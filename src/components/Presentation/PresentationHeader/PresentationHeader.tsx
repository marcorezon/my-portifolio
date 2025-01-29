import applicationData from "../../../data/applicationData.json";
import styles from "../../../styles/globalStyles.module.css";

export function PresentationHeader() {
  return (
    <div
      className={`h-screen flex flex-col font-bold text-center ${styles.arise}`}
    >
      <h1 className="m-auto flex flex-col">
        <span className="m-auto">
          My name is {applicationData.about_me.firstName}
        </span>
        <span className="xs:text-[8vw] xl:text-[3vw] textbg-white">
          {applicationData.about_me.role}
        </span>
      </h1>
    </div>
  );
}
