import React from "react";
import Image from "next/image";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const Page = () => {
  return (
    <div className="bg-white">
      <header className="bg-teal-200/30 ">
        <h1 className="md:text-4xl text-gray-600 antialiased text-2xl pt-16 text-center font-semibold">
          Getting started with BoardStack
        </h1>
        <section className="flex flex-col md:flex-row pt-5 items-center md:items-start justify-center gap-2">
          <p className="text-gray-600 max-w-[500px] p-5 mx-5 md:mr-10  bg-teal-500/10 shadow-sm rounded-3xl shadow-gray-500 mt-8 text-center md:text-start  tracking-wide ">
            After going through this tutorial, you will not only be able to
            effectively use BoardStack but also understand key best practices to
            optimize your workflow. <br />
            This page serves as a comprehensive guide to help you get acquainted
            with BoardStack’s features, from basic setup to advanced usage. You
            will learn how to create and manage boards
          </p>
          <Image
            src="/assets/Header.png"
            alt="headerImg"
            width={400}
            height={300}
            className="rounded-3xl h-auto w-[350px]  "
          />
        </section>
      </header>
      <main className="pt-2">
        <section>
          <h2 className="text-center text-xl md:text-3xl my-10">
            ¿What is a{" "}
            <span className="underline underline-offset-2 decoration-teal-500/30">
              Kanban
            </span>{" "}
            Board?
          </h2>
          <article className="flex flex-col items-center gap-5">
            <p className="text-gray-500 text-lg max-w-[700px] mx-5 tracking-wide ">
              <Image
                src="/assets/blog/kanbanExample.png"
                width={400}
                height={311}
                alt="kanBan elements example"
                className="shape pb-5"
              />
              <em>A Kanban board</em>&nbsp; is an <strong>Agile</strong> project
              management tool designed to help visualize work, limit work in
              progress, and maximize efficiency (or flow). <br /> It originated
              from the Japanese manufacturing industry and has since been
              adapted for use in software development and other fields.{" "}
              <strong>T</strong>he board typically consists of columns
              representing different stages of a workflow, such as{" "}
              <strong>'Backlog,' 'To Do,' 'In Progress,' and 'Done.'</strong>{" "}
              Each task is represented by a card, which moves from left to right
              across the board as it progresses through these stages. This
              visual representation helps teams track the status of tasks,
              identify bottlenecks, and improve overall workflow efficiency.
            </p>
          </article>
        </section>
        <section className="mt-16 pt-8 pb-8  bg-cyan-200/30">
          <h3 className="text-center text-xl md:text-3xl">
            What <strong>BoardStack</strong> offers
          </h3>
          <article className="flex pt-7 flex-col md:flex-row items-center mx-4 justify-center">
            <Image
              height={400}
              width={300}
              src="/assets/blog/kanbanExample.png"
              alt="img"
              className="w-[400px] h-auto"
            />
            <ol className="list-disc text-gray-700 p-2 mt-4 md:mt-0 md:text-xl text-md fira text-wrap  ml-8">
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
              <li className="relative mb-3">
                <span className="text-gray-500/50 text-sm absolute top-6 ">
                  (currently developing)
                </span>{" "}
                other types of files for details
              </li>
              <li className="relative mb-5">
                <span className="text-gray-500/50  text-sm absolute top-6">
                  (currently developing)
                </span>{" "}
                re arrenge tasks beetween cards
              </li>
            </ol>
          </article>
        </section>
        <section className="mt-10 pt-4 pb-8">
          <h3 className="text-center text-xl md:text-2xl">
            What more can you do with <strong>BoardStack</strong>
          </h3>
          <article className="flex pt-7 mb-4 md:mb-0 flex-col md:flex-row items-center mx-4 justify-center">
            <p className="max-w-[400px] mr-4 mb-4 md:mb-0 bg-emerald-200/40 shadow-sm shadow-gray-500 rounded-3xl p-5">
              Our app includes a login feature with convenient options like
              Google, or you can register manually. Currently, its designed for
              a very basic kanban experience as it serves primarily as a
              portfolio piece.
              <br />
              However, you can save and reload your current project whenever
              needed. Currently available on the web, we are actively developing
              the mobile app for Android and iOS platforms.
              <br />
              <br />
              <AndroidIcon className="text-5xl text-[#3ddc84] md:ml-[250px] " />
              <AppleIcon className="text-5xl stroke-black stroke-[1px]  text-white  " />
            </p>
            <Image
              height={400}
              width={400}
              src="/assets/blog/kanbanExample.png"
              alt="img"
              className="shape "
            />
          </article>
        </section>
      </main>
    </div>
  );
};
export default Page;
