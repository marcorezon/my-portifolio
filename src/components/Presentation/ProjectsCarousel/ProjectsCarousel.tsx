"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import applicationData from "../../../data/applicationData.json";
import { CarouselArrow } from "@/components/common/CarouselArrow/CarouselArrow";
import { ProjectCarouselItem } from "./ProjectCarouselItem/ProjectCarouselItem";
import styles from "../../../styles/globalStyles.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.25,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export function ProjectsCarousel() {
  const handleClick = () => {};

  return (
    <div className={`w-[90vw] h-full flex flex-col ${styles.presentation}`}>
      <h3 className="self-center mb-10">Projects</h3>
      <Carousel
        containerClass="h-full px-[max(8vw,_64px)]"
        removeArrowOnDeviceType={["mobile", "tablet"]}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        customLeftArrow={<CarouselArrow onClick={handleClick} variant="left" />}
        customRightArrow={
          <CarouselArrow onClick={handleClick} variant="right" />
        }
      >
        {applicationData.projects.map((project, index) => (
          <ProjectCarouselItem key={index} {...project} />
        ))}
      </Carousel>
    </div>
  );
}
