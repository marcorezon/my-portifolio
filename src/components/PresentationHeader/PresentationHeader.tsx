import { LinkButton } from "@/components/common/LinkButton/LinkButton";
import applicationData from "../../data/applicationData.json";
import styles from "../../styles/globalStyles.module.css";
import { Arrow } from "../common/Arrow/Arrow";

export function PresentationHeader() {
  return (
    <div
      className={`flexColCentered font-bold gap-[5vh] px-3 text-center ${styles.arise}`}
    >
      <h1 className="flex flex-col">
        <span className="m-auto">
          My name is {applicationData.about_me.firstName}
        </span>
        <span className="xs:text-[11vw] md:text-[5vw] xl:text-[3vw]">
          {applicationData.about_me.role}
        </span>
      </h1>
      <a
        className={`flex items-center gap-2 cursor-pointer hover:scale-105 ${styles.arise}`}
        href="/about-me"
      >
        <span className="text-xl">About me</span>
        <Arrow />
      </a>
      <div className="fixed bottom-[7vh] flex gap-10">
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
