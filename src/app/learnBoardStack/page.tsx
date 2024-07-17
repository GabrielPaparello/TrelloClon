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
      <main className="flex justify-center flex-col items-center">
        <h1 className="text-white text-center text-3xl mb-[150px] fira">
          Current ways on BoardStack
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl raleway ">
            What is a Kanban Board
          </h2>
          <section className="flex flex-col  p-5 gap-10 fira  mt-20 text-center  ">
            {/*video explanation */}
            <p className=" fira md:text-lg max-w-[400px] self-start  ">
              We got too start like everything with the basics. A Kanban board
              is an agile project management tool designed to help visualize
              work, limit work in progress, and maximize efficiency (or flow).
            </p>
            <br></br>
            <p className=" fira md:text-lg max-w-[400px] self-start  ">
              {" "}
              It can assist both agile teams and DevOps teams in defining the
              order of their daily tasks.
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
        <section className="flex flex-col gap-10 mt-20 p-5">
          <h2 className="raleway text-xl text-center">
            What BoardStack offers
          </h2>
          <ol className="list-disc p-2">
            <li>Create Cards</li>
            <li>Organize Tasks in each card</li>
            <li>Details of task and positibility to add checklists</li>
            <li>
              <span className="text-gray-500 ">(currently developing)</span>{" "}
              other types of files for details
            </li>
            <li>
              <span className="text-gray-500">(currently developing)</span> re
              arrenge tasks beetween cards
            </li>
          </ol>
          <p>
            Our app includes a login feature with convenient options like
            Google, or you can register manually. Currently, its designed for
            managing a single project at a time, as it serves primarily as a
            portfolio piece.
          </p>
          <Image src="" alt="img" />
          <br></br>
          <p>
            However, you can save and reload your current project whenever
            needed. Currently available on the web, we are actively developing
            the mobile app for Android and iOS platforms.
          </p>
          <aside className="flex  justify-center -mt-5 space-x-5  ">
            <AndroidIcon className="text-5xl hover:text-[#3DDC84] transition-all duration-300 " />
            <AppleIcon className="text-5xl  stroke-black text-white  hover:text-black hover:stroke-white transition-all duration-300 " />
          </aside>
        </section>
      </main>
    </>
  );
};

export default page;
