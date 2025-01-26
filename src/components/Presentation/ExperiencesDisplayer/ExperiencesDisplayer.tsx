"use client";

import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ExperiencesDisplayer.module.css";
import applicationData from "../../../data/applicationData.json";
import { CarouselArrow } from "@/components/common/CarouselArrow/CarouselArrow";

export function ExperiencesDisplayer() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="w-[70%] h-[400px]">
      <h2 className="w-fit text-2xl mx-auto mb-8">Experiences</h2>
      <Carousel
        className={`"w-full" ${styles.container}`}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customRightArrow={<CarouselArrow variant="right"/>}
        customLeftArrow={<CarouselArrow variant="left"/>}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="h-full overflow-y-scroll"
        itemClass="px-10">
        {applicationData.about_me.experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </Carousel>
    </section>
  );
}
