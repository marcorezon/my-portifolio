import applicationData from "../../../data/applicationData.json";

export function ContactInfo() {
  return (
    <div className="w-full flex gap-[8vh] items-start justify-around py-[5vh] xs:flex-col sm:flex-row">
      <div className="h-full flex flex-col gap-5 items-start justify-start">
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
      <div className="flex flex-col gap-3 items-start">
        <h4>Location</h4>
        <span className="text-sm text-primary-grey">
          {applicationData.about_me.location}
        </span>
      </div>
    </div>
  );
}
