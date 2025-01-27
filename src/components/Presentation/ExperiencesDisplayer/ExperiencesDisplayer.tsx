"use client";

import { MouseEventHandler } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import { CarouselArrow } from "@/components/common/CarouselArrow/CarouselArrow";
import styles from "../../../styles/globalStyles.module.css";
import applicationData from "../../../data/applicationData.json";

const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {};

export function ExperiencesDisplayer() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section
      className={`w-[90%] md:h-[400px] ${styles.presentation}`}
    >
      <h2 className="w-fit text-2xl mx-auto mb-8">Experiences</h2>
      <Carousel
        className="w-full"
        containerClass="w-full h-full px-[max(8vw,_64px)]"
        removeArrowOnDeviceType={"mobile, tablet"}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        ssr={true}
        keyBoardControl={true}
        customLeftArrow={<CarouselArrow onClick={handleClick} variant="left" />}
        customRightArrow={
          <CarouselArrow onClick={handleClick} variant="right" />
        }
      >
        {applicationData.about_me.experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </Carousel>
    </section>
  );
}
