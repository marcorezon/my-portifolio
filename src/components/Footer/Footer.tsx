import { LinkButton } from "../common/LinkButton/LinkButton";
import applicationData from "../../data/applicationData.json";

export function Footer() {
  return (
    <div className="w-full h-[100px] flex items-center justify-center pt-2">
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
  );
}
