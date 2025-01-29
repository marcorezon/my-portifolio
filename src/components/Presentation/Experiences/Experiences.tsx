import applicationData from "../../../data/applicationData.json";

export function Experiences() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-[10vh]">
      <h4>Work experiences</h4>
      <br />
      <table className="w-2/3">
        <tbody>
          {applicationData.about_me.experiences.map((experience, index) => (
            <tr
              key={index}
              className="flex justify-start items-center gap-10 md:text-2xl font-400 border-t border-primary-white"
            >
              <td className="py-5">
                <span>{experience.details.period}</span>
              </td>
              <td className="flex">
                <span>{experience.company}</span>
              </td>
              <td>
                <span>{experience.details.role}</span>
              </td>
              <td>
                <span>{experience.details.type}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
