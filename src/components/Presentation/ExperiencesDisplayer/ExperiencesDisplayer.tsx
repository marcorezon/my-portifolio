import applicationData from "../../../data/applicationData.json";

export function ExperiencesDisplayer() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Experiences</h2>
      {applicationData.about_me.experiences.map((experience, index) => (
        <ul key={index}>
          {Object.entries(experience).map(([key, value]) => (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
