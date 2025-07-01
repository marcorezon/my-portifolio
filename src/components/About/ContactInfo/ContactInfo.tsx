import applicationData from "../../../data/applicationData.json";

export function ContactInfo() {
  return (
    <div className="w-full flex justify-around items-start">
      <div className="w-fit h-full flex flex-col justify-start gap-5">
        <h3>Contact information</h3>
        <div className="w-fit h-full flex flex-col items-start justify-start">
          {Object.entries(applicationData.contact).map(
            ([key, value], index) => (
              <span key={index} className="text-sm select-text">
                {key}: {value}
              </span>
            )
          )}
        </div>
      </div>
      <div className="flexColCentered">
        <h4>Location</h4>
        <span className="text-sm text-primary-grey">
          {applicationData.about_me.location}
        </span>
      </div>
    </div>
  );
}
