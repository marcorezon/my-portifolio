import { LinkButton } from "@/components/common/LinkButton/LinkButton";
import { ProjectProps } from "@/shared/interfaces";
import Image from "next/image";

export function ProjectCarouselItem(project: ProjectProps) {
  return (
    <div className="relative w-fit h-[320px] overflow-hidden rounded-3xl cursor-pointer">
      <Image
        src="https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"
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
