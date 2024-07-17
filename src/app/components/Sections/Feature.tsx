import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import features from "../../lib/assets/features";
import Image from "next/image";
import Slider from "react-slick";

const Feature = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000, // Adjusted for smoother transition
    pauseOnHover: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-opacity-30 p-2 md:p-5 bg-gray-900">
      <Slider {...settings}>
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col md:flex-row px-5">
            <div className="w-full md:max-w-[250px] md:w-[250px] m-auto md:m-0">
              <Image
                className="object-cover rounded-3xl"
                src={feature.imgPath}
                alt={feature.imgAlt}
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col justify-center ml-0 md:ml-5 mt-3 md:mt-0">
              <h2 className="text-2xl md:text-3xl text-[#6ee2f5] font-bold mb-2">
                {feature.h2}
              </h2>
              <h3 className="text-lg md:text-xl text-white">
                {feature.h3}
                <span className="text-gray-400 pl-5">Coming soon...</span>
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feature;
