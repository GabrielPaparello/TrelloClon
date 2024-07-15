import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import features from "../lib/assets/features";
import Image from "next/image";
import Slider from "react-slick";



const Feature = () => {
    const settings = {
      arrows:false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2,
    cssEase: "linear",
        pauseOnHover: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 600, settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
            }
        }
    ]
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <>
            <section className="flex flex-col md:flex-row px-5 bg-[#21232B] p-5 bg-opacity-[30%] ">
              <article key={feature.id}>
                <Image
                  className="shadow-sm shadow-[#191552
] rounded-3xl"
                  src={feature.imgPath}
                  alt={feature.imgAlt}
                  width={250}
                  height={250}
                />
              </article>
              <article className="flex flex-col fira m-2 md:max-w-[400px] min-w-[200px]">
                <h2 className="md:text-[30px] text-[20px] text-[#6ee2f5]">{feature.h2}</h2>
                <h3 className="md:text-[25px] text-[15px] text-white">{feature.h3}</h3>
              </article>
            </section>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Feature;
