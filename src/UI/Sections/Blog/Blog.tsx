import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "../Blog/utils/rules";
import SlideBot from "@/UI/animations/SlideBottom";
import SlideBotWopacity from "@/UI/animations/SlideBotWopacity";
const Blog = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize(); // Set initial width on mount

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SlideBotWopacity>
      <section className="flex flex-col md:flex-row flex-wrap gap-10 text-center pb-10 md:items-center md:justify-center md:gap-16 pt-10 p-5 bg-[#e8e8ee]">
        {data.map((item) => (
          <SlideBot key={item.title}>
            <article key={item.title} className="flex flex-col  ">
              <Image
                src={item.link}
                width={width > 500 ? 400 : 300}
                height={311}
                alt={item.imgAlt}
                className="rounded-lg md:order-2 md:w-[280px] md:h-[200px] "
              />
              <h1 className="text-black/80 text-2xl text-start md:text-3xl md:w-[320px] mt-2 md:order-1 font-bold mb-4">
                {item.title}
              </h1>
              <article className="md:order-3 mt-2 text-start">
                <p className="text-black/70  md:max-w-[320px] md:min-w-[320px] text-lg md:text-xl mb-6">
                  {item.description}{" "}
                  <span className="text-black/40 pl-5">Coming Soon</span>
                </p>
                <button className="w-[200px] bg-blue-700 hover:bg-blue-900   text-[#f4f3f0] font-bold py-2 px-4 rounded">
                  Read More...
                </button>
              </article>
            </article>
          </SlideBot>
        ))}
      </section>
    </SlideBotWopacity>
  );
};

export default Blog;
