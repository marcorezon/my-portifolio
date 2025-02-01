import Image from "next/image";
import { LinkButton } from "@/components/common/LinkButton/LinkButton";
import { ProjectProps } from "@/shared/interfaces";

export function ProjectCarouselItem(project: ProjectProps) {
  return (
    <div className="relative w-fit h-[320px] overflow-hidden rounded-3xl cursor-pointer">
      <Image
        src="https://private-user-images.githubusercontent.com/52473242/350544433-8827329c-fc35-4c7b-878e-62918a9a8add.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgyMTc3OTksIm5iZiI6MTczODIxNzQ5OSwicGF0aCI6Ii81MjQ3MzI0Mi8zNTA1NDQ0MzMtODgyNzMyOWMtZmMzNS00YzdiLTg3OGUtNjI5MThhOWE4YWRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTMwVDA2MTEzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE0NjBjOGNiZjkwNWQ4ZWE3ZmJiMjllNTFiYTAxN2EyMDQxOWU3OWZmNmQ1YzYyYjQwOWI3YzBhOGExN2IyOWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4y0FC829hFDse485Sgr4krh5M8wCVLboAb9E5ed5FQ8"
        height={300}
        width={640}
        objectFit="cover"
        alt="Project image"
      />
      <div className="absolute top-0 right-0 w-[70%] h-full flex flex-col justify-around items-center bg-primary-transparent p-10">
        <p className="text-2xl">{project.title}</p>
        <p className="text-sm text-primary-grey">{project.subtitle}</p>
        <LinkButton path="" text="Read More" colorVariant="inverted" style="self-start px-10"/>
      </div>
    </div>
  );
}
