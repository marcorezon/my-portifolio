import applicationData from "../../data/applicationData.json";

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Contact</h1>
      <div className="w-fit h-full flex flex-col items-start justify-center">
        {Object.entries(applicationData.contact).map(([key, value], index) => (
          <code key={index}>
            const {key} = "{value}"
          </code>
        ))}
      </div>
    </div>
  );
}
