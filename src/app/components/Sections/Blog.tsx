import Image from "next/image";
import React from "react";
const Blog = () => {
  let width = window.innerWidth;
  return (
    <section className="flex flex-col md:flex-row md:gap-10 md:items-start mt-20 p-5 bg-gradient-to-t from-[#bab9cb] to-[#191552]  ">
      <article className="">
        <Image
          src="/assets/blog/blog1.jpeg"
          width={width > 500 ? 800 : 300}
          height={311}
          alt="blog-Img"
        />
      </article>
      <article className="mt-5 flex flex-col ">
        <h2 className="text-[#f4f3f0] text-[22px] md:text-[40px] fira ">
          Currently Working on the mobile APP
        </h2>
        <h3 className="text-[#bab9cb] text-[15px] md:text-[25px] fira">
          Experience BoardStack on the go with our fully-featured mobile app
          available soon for iOS and Android.
        </h3>
        <button className="w-[200px] bg-[#191552] mt-10 hover:bg-[#6ee3f5ac] text-[#f4f3f0] font-bold py-2 px-4 rounded">
          Read More...
        </button>
      </article>
    </section>
  );
};

export default Blog;
