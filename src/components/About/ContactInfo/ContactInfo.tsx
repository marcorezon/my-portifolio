import applicationData from "../../../data/applicationData.json";

export function ContactInfo() {
  return (
    <div className="w-full h-full flex flex-col justify-start gap-5 px-[10%]">
      <h3>Contact information</h3>
      <div className="w-fit h-full flex flex-col items-start justify-start">
        {Object.entries(applicationData.contact).map(([key, value], index) => (
          <span key={index}>
            {key}: {value}
          </span>
        ))}
      </div>
    </div>
  );
}
