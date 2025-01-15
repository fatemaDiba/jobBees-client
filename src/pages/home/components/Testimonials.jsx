import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      photo: "https://randomuser.me/api/portraits/men/20.jpg",
      quote:
        "The platform is super user-friendly and has a variety of job postings. It's been a game-changer for me!",
    },
    {
      name: "Sarah Lee",
      photo: "https://randomuser.me/api/portraits/women/21.jpg",
      quote:
        "Thanks to JobBees, I landed a great freelance gig that perfectly fits my schedule. Fantastic experience!",
    },
    {
      name: "James Anderson",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
      quote:
        "With JobBees, I felt confident applying for positions because of the transparency they provide. A top-notch platform!",
    },
    {
      name: "Ava Davis",
      photo: "https://randomuser.me/api/portraits/women/38.jpg",
      quote:
        "The job notifications kept me updated about opportunities, and I didn’t miss any chances. Amazing experience!",
    },
    {
      name: "Liam Harris",
      photo: "https://randomuser.me/api/portraits/men/29.jpg",
      quote:
        "Finding freelance work has never been easier. JobBees is a game-changer for professionals like me!",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary-new mb-6">
          What People Are Saying
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
          slidesPerView={3}
          loop
          className="w-11/12 md:w-container xl:w-10/12 mx-auto"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center pb-14"
              style={{ width: "100%", height: "350px" }} // Set a fixed height and width
            >
              <div className="bg-white p-5 shadow-md rounded-lg h-full w-full flex flex-col justify-between">
                <div className="flex flex-col items-center space-y-4 h-full justify-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-primary-new"
                  />
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
