import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-10 p-10 md:space-x-28 md:mb-40 mb-30 md:pt-40 pt-20 md:order-1 pb-40 justify-center">
      {/* Left Section */}
      <section className="order-2 flex flex-col text-center md:text-start">
        <h1 className="text-3xl md:text-5xl text-white max-w-prose font-bold mb-4">
          Empower Your Team with BoardStack
        </h1>
        <h3 className="text-lg md:text-xl text-white max-w-prose mb-6">
          Streamline your projects and collaborate seamlessly with our intuitive
          task management platform.
        </h3>
        <div className="space-y-4">
          <Link href="projects">
            <a className="w-52 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">
              Get Started
            </a>
          </Link>
          <Link href="projects">
            <a className="w-52 text-blue-500 font-bold py-2 px-4 rounded inline-block border border-blue-500 hover:bg-blue-100">
              Learn More...
            </a>
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
