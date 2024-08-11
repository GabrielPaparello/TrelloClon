import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import features, { settings } from "../../lib/assets/features";
import Image from "next/image";
import Slider from "react-slick";
import "./feature.css";
const Feature = () => {
  return (
    <div
      className="slider-container  p-2 md:p-5
     bg-blue-950/70 "
    >
      <div className="linetop"></div>

      <Slider {...settings}>
        {features.map((feature) => (
          <div key={feature.id} className="flex p-5">
            <div
              className={`w-full
               flex flex-col 
              md:flex-row 
              md:max-w-[250px]
               md:w-[250px] 
               m-auto md:m-0`}
            >
              <Image
                className="object-cover rounded-3xl md:w-[120px] md:h-[120px]"
                src={feature.imgPath}
                alt={feature.imgAlt}
                width={250}
                height={250}
              />
              <div className="flex flex-col justify-center ml-0 md:ml-5 mt-3 md:mt-0">
                <h1 className="text-2xl md:text-xl md:min-w-[300px] text-blue-300 font-bold mb-2">
                  {feature.h2}
                </h1>
                <h2 className="text-lg md:text-lg text-white/80">
                  {feature.h3}
                  <span className="text-gray-400 pl-5">Coming soon...</span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="linebot"></div>
    </div>
  );
};

export default Feature;
