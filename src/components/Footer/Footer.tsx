import { LinkButton } from "../common/LinkButton/LinkButton";
import { MarcoLogo } from "../common/MarcoLogo/MarcoLogo";
import applicationData from "../../data/applicationData.json";
import styles from "../../styles/globalStyles.module.css";

export function Footer() {
  return (
    <div
      className={`w-full h-[140px] flexColCentered sm:flex-row-reverse ${styles.arise}`}
    >
      <span className="flex items-center justify-center">
        {applicationData.header.buttons.map((buttonItem, index) => (
          <LinkButton
            key={index}
            path={buttonItem.path}
            text={buttonItem.text}
            iconName={buttonItem.text}
            isExternal
          />
        ))}
      </span>
      <MarcoLogo isAcronym isSmaller />
    </div>
  );
}
