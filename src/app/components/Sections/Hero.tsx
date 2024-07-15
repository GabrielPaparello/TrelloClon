import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
        <main className="flex flex-col md:flex-row md:order-1 pb-40 items-start md:pt-40 pt-20 gap-10 md:gap-0 p-10 justify-center md:space-x-28 md:mb-40 mb-30 ">
        <section className="flex flex-col  text-center order-2 ">
          <h1 className="md:text-[44px] text-[25px] text-[#F4F3F0] max-w-[576px] text-start mb-4 fira font-bold">
            Empower Your Team with BoardStack
          </h1>
          <h3 className="md:text-[24px] text-[15px] text-[#F4F3F0] max-w-[466px] text-start fira ">
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
        </section>
        <section className="md:ml-20  order-1 md:order-2 bg-[#6ee2f5] bg-opacity-[1%] p-10 rounded-3xl">
          <Image
            src="/assets/headerLogo.png"
            alt="headerImg"
            width={490}
            height={368}
          />
        </section>
      </main>

)
}

export default Hero