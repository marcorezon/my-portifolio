import { LinkButton } from "@/components/common/LinkButton/LinkButton";
import applicationData from "../../data/applicationData.json";
import styles from "../../styles/globalStyles.module.css";

export function PresentationHeader() {
  return (
    <div
      className={`h-full flexColCentered font-bold gap-[5vh] px-3 text-center ${styles.arise}`}
    >
      <h1 className="flex flex-col">
        <span className="m-auto">
          My name is {applicationData.about_me.firstName}
        </span>
        <span className="xs:text-[11vw] md:text-[5vw] xl:text-[3vw]">
          {applicationData.about_me.role}
        </span>
      </h1>
      <div className="flex gap-10">
        {applicationData.header.buttons.map((buttonItem, index) => (
          <LinkButton
            key={index}
            path={buttonItem.path}
            text={buttonItem.text}
            iconName={buttonItem.text}
            isExternal
          />
        ))}
      </div>
    </div>
  );
}
