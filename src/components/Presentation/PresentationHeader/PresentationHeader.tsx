import applicationData from "../../../data/applicationData.json";

export function PresentationHeader() {
  return (
    <div className="h-screen flex flex-col font-bold text-center">
      <h1 className="m-auto flex flex-col">
        <span className="m-auto">
          My name is {applicationData.about_me.firstName}
        </span>
        <span className="xs:text-[8vw] xl:text-[3vw]">
          I am a{" "}
          <span className="textBlueGradient">
            {applicationData.about_me.role}
          </span>
        </span>
      </h1>
    </div>
  );
}
