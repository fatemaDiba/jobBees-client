import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  //slide-specific content
  const slides = [
    {
      image: "/assets/b4.jpg",
      heading: "Find Your Dream Job Today",
      description:
        "Explore thousands of job listings and discover your next career move with ease.",
    },
    {
      image: "/assets/b2.jpg",
      heading: "Boost Your Career with Top Companies",
      description:
        "Connect with leading employers and find the perfect opportunity tailored to your skills.",
    },
    {
      image: "/assets/b1.jpg",
      heading: "Your Journey to Success Starts Here",
      description:
        "From startups to Fortune 500 companies, we bring the best jobs right to you.",
    },
    {
      image: "/assets/b3.jpg",
      heading: "Work Anywhere, Anytime",
      description:
        "Find remote jobs and flexible opportunities that fit your lifestyle.",
    },
  ];

  return (
    <section className="relative">
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
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center"
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            {/*Image */}
            <img
              src={slide.image}
              alt={`Banner ${index + 1}`}
              className="h-[65vh] md:h-[85vh] object-cover object-center w-full z-0"
            />
            {/* Slide Content */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col gap-4 justify-center items-center text-white w-10/12 mx-auto lg:w-full text-center">
              <h2 className="text-2xl md:text-4xl font-bold">
                {slide.heading}
              </h2>
              <p className="w-[80%] md:w-[50%] text-sm md:text-base font-medium">
                {slide.description}
              </p>
              <a
                href=""
                className="btn text-white border-[#50ade9] bg-light-primary/70 pointer-events-auto hover:bg-blue-700"
              >
                Explore More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
