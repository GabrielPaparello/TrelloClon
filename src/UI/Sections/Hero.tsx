import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-10 p-10 md:space-x-28 md:mb-00 mb-30 md:pt-40 pt-20 md:order-1 pb-40 justify-center">
      {/* Left Section */}
      <section className="order-2 flex flex-col text-center md:text-start">
        <h1 className="text-4xl md:text-6xl text-white font-bold max-w-[500px] leading-tight mb-4">
          Empower Your Team with BoardStack
        </h1>
        <h3 className="text-lg md:text-xl text-white max-w-prose mb-6">
          Streamline your projects and collaborate seamlessly with our intuitive
          task management platform.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 text-center"
            href="/testproject"
          >
            Get Started
          </Link>
          <Link
            className="w-full md:w-auto border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded hover:bg-blue-100 transition duration-300 text-center mt-2 md:mt-0"
            href="/learnBoardStack"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Right Section */}
      <section className="order-1 md:order-2 bg-blue-200 bg-opacity-25 p-8 md:p-10 rounded-xl">
        <Image
          src="/assets/headerLogo.png"
          alt="headerImg"
          width={490}
          height={368}
          className="rounded-xl"
        />
      </section>
    </main>
  );
};

export default Hero;
