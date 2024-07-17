import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <section className="flex flex-col md:flex-row md:gap-10 md:items-start mt-20 p-5 bg-gradient-to-t from-[#bab9cb] to-[#191552]">
      {/* Left Section - Image */}
      <article className="">
        <Image
          src="/assets/blog/blog1.jpeg"
          width={width > 500 ? 800 : 300}
          height={311}
          alt="blog-Img"
          className="rounded-lg"
        />
      </article>

      {/* Right Section - Text Content */}
      <article className="mt-5 flex flex-col text-left">
        <h2 className="text-[#f4f3f0] text-2xl md:text-5xl font-bold mb-4">
          Currently Working on the Mobile App
        </h2>
        <h3 className="text-[#bab9cb] text-lg md:text-2xl mb-6">
          Experience BoardStack on the go with our fully-featured mobile app
          available soon for iOS and Android.{" "}
          <span className="text-gray-200 pl-5">Coming Soon</span>
        </h3>
        <button className="w-[200px] bg-[#191552] hover:bg-[#6ee3f5ac] text-[#f4f3f0] font-bold py-2 px-4 rounded">
          Read More...
        </button>
      </article>
    </section>
  );
};

export default Blog;
