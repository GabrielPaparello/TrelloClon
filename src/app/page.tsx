"use client";
import Image from "next/image";
import Link from "next/link";
import Homenav from "./components/Homenav";
import features from "./lib/assets/features";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as CarouselTypes from "./lib/types/carousel";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <header>
        <nav>
          <Homenav />
        </nav>
      </header>
      <main className="flex min-h-screen items-center  space-x-5  lg:space-x-15   p-24">
        <div className="flex flex-col  text-center ">
          <h1 className="text-[44px] text-[#F4F3F0] max-w-[576px] text-start mb-4 fira font-bold">
            Empower Your Team with BoardStack
          </h1>
          <h3 className="text-[24px] text-[#F4F3F0] max-w-[466px] text-start fira ">
            Streamline your projects and collaborate seamlessly with our
            intuitive task management platform.
          </h3>
          <div>
            <button className="w-[200px] bg-[#6ee2f5] mt-10 hover:bg-[#6ee3f5ac] text-[#21232B] font-bold py-2 px-4 rounded">
              <Link href="projects">Get Started</Link>
            </button>
            <button className="w-[200px]  text-[#21232B] font-bold py-2 px-4 rounded">
              <Link href="projects" className="text-[#6ee2f5] underline pb-4 ">
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <aside className="lg:ml-20">
          <Image
            src="/assets/headerLogo.png"
            alt="headerImg"
            width={490}
            height={368}
          />
        </aside>
      </main>
      {/* Feature Section */}
      <div className="">
        {/* <section className="" > */}
        <Carousel
        className="bg-[#21232B]  p-7"
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          
          containerClass="container-with-dots"
          customTransition="all 2s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
          <section className='flex items-center '>
          {features.map((feature, index) => (
            <>
              <article key={feature.id}>
                <Image
                  className="shadow-lg"
                  src={feature.imgPath}
                  alt={feature.imgAlt}
                  width={191}
                  height={191}
                />
              </article>
              <article className="flex flex-col fira m-4">
                <h2 className="text-[24px] text-[#6ee2f5]">{feature.h2}</h2>
                <h3 className="text-[18px] text-white">{feature.h3}</h3>
              </article>
            </>
          ))}
          </section> 
        </Carousel>
        
      </div>
    </>
  );
}
