import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col gap-4 justify-center items-center text-white w-10/12 mx-auto lg:w-full text-center mt-12">
        <h1 className="text-2xl md:text-4xl font-bold">
          Find Jobs That Fit Your Skills
        </h1>
        <p className="w-[80%] md:w-[50%] text-sm md:text-base font-medium">
          From startups to global enterprises, JobBees connects you to the best
          job openings. Explore new opportunities and land the career you
          deserve.
        </p>
        <a
          href=""
          className="btn text-white border-[#50ade9] bg-light-primary/70 pointer-events-auto hover:bg-blue-700"
        >
          Explore More
        </a>
      </div>

      <Swiper
        loop
        modules={[Navigation, Autoplay]}
        navigation={{
          enabled: window.innerWidth > 640,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[65vh] md:h-[85vh]"
      >
        <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <img
            src="/assets/b2.jpg"
            alt="Banner 1"
            className="h-[65vh] md:h-[85vh] object-cover object-center w-full z-0"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <img
            src="/assets/b4.jpg"
            alt="Banner 2"
            className="h-[65vh] md:h-[85vh] object-cover w-full z-0"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <img
            src="/assets/b1.jpg"
            alt="Banner 3"
            className="h-[65vh] md:h-[85vh] object-cover object-center w-full z-0"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <img
            src="/assets/b3.jpg"
            alt="Banner 4"
            className="h-[65vh] md:h-[85vh] object-cover object-top w-full z-0"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
