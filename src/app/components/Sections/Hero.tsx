import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center gap-10 p-10 md:space-x-28 md:mb-40 mb-30 md:pt-52 pt-20 md:order-1 pb-40 justify-center">
      {/* Left Section */}
      <section className="order-2 flex flex-col items-center md:text-start">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 leading-tight max-w-prose text-center md:text-left">
          Empower Your Team with BoardStack
        </h1>
        <h3 className="text-lg md:text-xl text-white max-w-prose mb-6 text-center md:text-left">
          Streamline your projects and collaborate seamlessly with our intuitive
          task management platform.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link href="/projects">
            <a className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 text-center">
              Get Started
            </a>
          </Link>
          <Link href="/learnBoardStack">
            <a className="w-full md:w-auto border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded hover:bg-blue-100 transition duration-300 text-center mt-2 md:mt-0">
              Learn More
            </a>
          </Link>
        </div>
      </section>

      {/* Right Section */}
      <section className="order-1 md:order-2 bg-blue-200 bg-opacity-25 p-8 md:p-10 rounded-xl flex justify-center items-center">
        <div className="w-80 h-80 md:w-96 md:h-96 relative">
          <Image
            src="/assets/headerLogo.png"
            alt="headerImg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
