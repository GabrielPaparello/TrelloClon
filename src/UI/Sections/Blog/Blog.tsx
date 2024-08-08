import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "../Blog/utils/rules";
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
    <section className="flex flex-col md:flex-row gap-10 text-center md:items-center mt-10 p-5 bg-[#191552]">
      {data.map((item) => (
        <article className="flex flex-col  ">
          <Image
            src={item.link}
            width={width > 500 ? 450 : 300}
            height={311}
            alt={item.imgAlt}
            className="rounded-lg md:order-2 md:w-[450px] md:h-[311px] "
          />
          <h1 className="text-[#f4f3f0] text-2xl md:text-3xl mt-2 md:order-1 font-bold mb-4">
            {item.title}
          </h1>
          <article className="md:order-3 mt-2">
            <p className="text-[#bab9cb] md:max-w-[500px] md:min-w-[500px] text-lg md:text-2xl mb-6">
              {item.description}{" "}
              <span className="text-gray-200 pl-5">Coming Soon</span>
            </p>
            <button className="w-[200px] bg-[#6ee3f5cc]  hover:bg-[#6ee3f5ac] text-[#f4f3f0] font-bold py-2 px-4 rounded">
              Read More...
            </button>
          </article>
        </article>
      ))}
    </section>
  );
};

export default Blog;
