import Link from "next/link";
import { Arrow } from "../common/Arrow/Arrow";
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
      <Link
        className={`flex items-center gap-2 cursor-pointer hover:scale-105 ${styles.arise}`}
        href="/about-me"
      >
        <span className="text-xl">About me</span>
        <Arrow />
      </Link>
    </div>
  );
}
