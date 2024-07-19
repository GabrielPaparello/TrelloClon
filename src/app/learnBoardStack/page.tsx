"use client";
import React from "react";
import Image from "next/image";
import Homenav from "../components/Homenav";
import "../globals.css";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const page = () => {
  return (
    <>
      <header className=" mb-[40px] ">
        <nav>
          <Homenav />
        </nav>
      </header>
      <main className="flex justify-center flex-col items-center m-4 text-white ">
        <h1 className="text-white text-center md:text-4xl text-2xl p-2 antialiased tracking-wide  raleway md:p-10  ">
          What is a Kanban Board{" "}
        </h1>
        <div className="flex flex-col  items-center">
          <h2 className="text-xl md:text-2xl raleway "></h2>
          <section className="flex md:flex-row flex-col  p-10  gap-2 fira  mt-5 text-center bg-white/10 rounded-md shadow-black shadow-md   ">
            {/*video explanation */}
            <p className=" fira md:text-xl max-w-[600px] min-w-[400px] self-center text-start first-letter:font-bold first-letter:text-[#6ee2f5] font-thin text-pretty leading-relax">
              We got too start like everything with the basics.
              <br /> <br />A Kanban board is an agile project management tool
              designed to help visualize work, limit work in progress, and
              maximize efficiency (or flow). It can assist both agile teams and
              DevOps teams in defining the order of their daily tasks.
            </p>

            <Image
              src="/assets/blog/kanbanExample.png"
              width={400}
              height={311}
              alt="kanBan elements example"
              className="self-center ring-[#6ee2f5]/50 shadow-md shadow-[#6ee2f5] ring-1 ring-offset-2 ring-offset-current hover:scale-[1.35] transition-all duration-300 "
            />
          </section>
        </div>
        <section className="flex flex-col gap-20 mt-20 p-5 items-center justify-center">
          <h2 className="relative text-center text-3xl antialiased  fira  z-10 text-[#6ee2f5] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 p-2 to-[#6ee2f5] font-bold bg-[#6ee2f5]/20 ">
            What BoardStack offers{" "}
            <span className=" -z-10 absolute inset-0 ring-[#6ee2f5]/50  shadow-purple-500/50   rounded-lg shadow-lg ring-2 animate-pulse"></span>
          </h2>
          <article className="flex items-center justify-center gap-10">
            <ol className="list-disc p-2 md:text-xl text-md fira ">
              <li>
                <button>Create Cards</button>
              </li>
              <li>
                <button>Organize Tasks in each card</button>
              </li>
              <li>
                <button>Customizable Details of task</button>
              </li>
              <li>
                <button>Positibility to add checklists</button>
              </li>
              <li>
                <span className="text-gray-500 ">(currently developing)</span>{" "}
                other types of files for details
              </li>
              <li>
                <span className="text-gray-500">(currently developing)</span> re
                arrenge tasks beetween cards
              </li>
            </ol>
            <article>
              <Image
                height={400}
                width={300}
                src="/assets/blog/kanbanExample.png"
                alt="img"
              />
            </article>
          </article>
          <section className="flex flex-col  items-center justify-center gap-5">
            <h3 className="z-10  p-2 relative text-center text-3xl antialiased  fira font-bold text-[#6ee2f5] bg-gradient-to-r from-[#6ee2f5]  text-transparent bg-clip-text to-purple-500">
              What else{" "}
              <span className=" ring-[#6ee2f5]/50 shadow-[#6ee2f5]/50 rounded-lg shadow-lg ring-2  animate-pulse   -z-10 absolute inset-0 "></span>
            </h3>
            <article className="md:flex md:flex-row justify-center flex flex-col items-center bg-gray-500/10 rounded-md shadow-black shadow-md p-10  mt-10 md:flex-wrap">
              <p className="md:text-xl text-md fira   md:max-w-[600px] mb-5">
                Our app includes a login feature with convenient options like
                Google, or you can register manually. Currently, its designed
                for managing a single project at a time, as it serves primarily
                as a portfolio piece.
                <span className="hidden md:block">
                  <br />
                  However, you can save and reload your current project whenever
                  needed. Currently available on the web, we are actively
                  developing the mobile app for Android and iOS platforms.
                  <br />
                  <br />
                  <AndroidIcon className="text-5xl text-[#3ddc84] ml-[250px] " />
                  <AppleIcon className="text-5xl  stroke-black text-white  " />
                </span>
              </p>
              <Image
                height={400}
                width={400}
                src="/assets/blog/kanbanExample.png"
                alt="img"
                className="self-center "
              />
              <p className="md:text-xl text-md md:hidden fira md:bg-white/10 rounded-md md:shadow-black md:shadow-md p-2 md:max-w-[600px] mt-5">
                However, you can save and reload your current project whenever
                needed. Currently available on the web, we are actively
                developing the mobile app for Android and iOS platforms.
              </p>
              <aside className="flex md:hidden  justify-center mt-2 space-x-5  ">
                <AndroidIcon className="text-5xl text-[#3ddc84]   " />
                <AppleIcon className="text-5xl  stroke-black text-white    " />
              </aside>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default page;
