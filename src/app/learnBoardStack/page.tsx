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
      <main className="flex justify-center flex-col items-center ">
        <h1 className="text-white text-center text-4xl antialiased  fira p-10 bg-[#6ee2f5]/20 ring-[#6ee2f5]/50 shadow-[#6ee2f5]/50 rounded-lg shadow-2xl ring-2 ">
          What is a Kanban Board{" "}
        </h1>
        <div className="flex flex-col  items-center">
          <h2 className="text-xl md:text-2xl raleway "></h2>
          <section className="flex   p-5 gap-10 space-x-[200px] fira  mt-20 text-center  ">
            {/*video explanation */}
            <p className=" fira md:text-xl max-w-[600px] self-center text-start bg-white/10 rounded-md shadow-black shadow-md p-2 first-letter:font-bold first-letter:text-[#6ee2f5] font-thin text-pretty leading-relax">
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
              className="self-center ring-[#6ee2f5]/50 shadow-lg shadow-[#6ee2f5] ring-1 ring-offset-2 ring-offset-current hover:scale-[1.35] transition-all duration-300 "
            />
          </section>
        </div>
        <section className="flex flex-col gap-20 mt-20 p-5 items-center justify-center">
          <h2 className="text-white text-center text-3xl antialiased  fira p-10 bg-[#6ee2f5]/20 ring-[#6ee2f5]/50 shadow-[#6ee2f5]/50 rounded-lg shadow-lg ring-2 ">
            What BoardStack offers{" "}
          </h2>
          <article className="flex items-center justify-center gap-10">
            <ol className="list-disc p-2 text-xl fira  ">
              <li>
                <button>Create Cards</button>
              </li>
              <li>
                <button>Organize Tasks in each card</button>
              </li>
              <li>
                <button>
                  Details of task and positibility to add checklists
                </button>
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
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-xl fira">
              Our app includes a login feature with convenient options like
              Google, or you can register manually. Currently, its designed for
              managing a single project at a time, as it serves primarily as a
              portfolio piece.
            </p>
            <Image
              height={300}
              width={200}
              src="/assets/blog/kanbanExample.png"
              alt="img"
              className="self-center"
            />
            <p className="text-xl fira">
              However, you can save and reload your current project whenever
              needed. Currently available on the web, we are actively developing
              the mobile app for Android and iOS platforms.
            </p>
          </div>

          <aside className="flex  justify-center -mt-5 space-x-5  ">
            <AndroidIcon className="text-5xl text-[#3ddc84]   " />
            <AppleIcon className="text-5xl  stroke-black text-white    " />
          </aside>
        </section>
      </main>
    </>
  );
};

export default page;
