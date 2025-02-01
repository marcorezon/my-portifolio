import Image from "next/image";
import { IconRetriever } from "../IconRetriever/IconRetriever";
import { ProjectProps } from "@/shared/interfaces";

export function ProjectDisplayer({
  project,
  isFunctional,
  handleClick = null,
}: {
  project: ProjectProps;
  isFunctional?: boolean;
  handleClick?: ((project: ProjectProps) => void) | null;
}) {
  const functionalStyle = "cursor-pointer m-5 hover:scale-[1.05]";

  return (
    <div
      {...(handleClick ? { onClick: () => handleClick(project) } : {})}
      tabIndex={isFunctional ? 0 : -1}
      className={`relative flex flex-col w-[300px] min-h-[300px] bg-primary-transparent rounded-md p-3 gap-4 shadow-lg ${
        isFunctional ? functionalStyle : ""
      }`}
    >
      <Image
        src="https://private-user-images.githubusercontent.com/52473242/350544433-8827329c-fc35-4c7b-878e-62918a9a8add.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgyMTc3OTksIm5iZiI6MTczODIxNzQ5OSwicGF0aCI6Ii81MjQ3MzI0Mi8zNTA1NDQ0MzMtODgyNzMyOWMtZmMzNS00YzdiLTg3OGUtNjI5MThhOWE4YWRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTMwVDA2MTEzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE0NjBjOGNiZjkwNWQ4ZWE3ZmJiMjllNTFiYTAxN2EyMDQxOWU3OWZmNmQ1YzYyYjQwOWI3YzBhOGExN2IyOWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4y0FC829hFDse485Sgr4krh5M8wCVLboAb9E5ed5FQ8"
        height={550}
        width={450}
        className="rounded-md"
        alt="Project image"
      />
      <p className="text-sm text-primary-grey">{project.subtitle}</p>
      <h4>{project.title}</h4>
      <hr />
      <div className="flex gap-4">
        {project.technologies.map((name, index) => (
          <IconRetriever key={index} iconName={name} height={25} width={25} />
        ))}
      </div>
    </div>
  );
}
