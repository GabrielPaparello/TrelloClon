"use client";
import React from "react";
import Image from "next/image";
import Homenav from "../components/Homenav";

const page = () => {
  return (
    <>
      <header className=" mb-[60px] ">
        <nav>
          <Homenav />
        </nav>
      </header>
      <main>
        <h1 className="text-white text-center text-3xl mb-[40px] fira">
          Current ways on BoardStack
        </h1>
        <section className="flex flex-col p-5 gap-10 fira ">
          {/*video explanation */}
          <h2 className="text-xl raleway">What is a Kanban Board</h2>
          <p className="fira">
            We got to start like everything with the basics. A Kanban board is
            an agile project management tool designed to help visualize work,
            limit work in progress, and maximize efficiency (or flow). It can
            assist both agile teams and DevOps teams in defining the order of
            their daily tasks.
          </p>
          <Image
            src="/assets/blog/kanbanExample.png"
            width={500}
            height={411}
            alt="kanBan elements example"
            className=""
          />
        </section>
        <section>
          <h2>What BoardStack offers</h2>
          <ol>
            <li>Create Cards</li>
            <li></li>
          </ol>
          <p>
            Our app includes a login feature with convenient options like
            Google, or you can register manually. Currently, it's designed for
            managing a single project at a time, as it serves primarily as a
            portfolio piece. However, you can save and reload your current
            project whenever needed. Currently available on the web, we are
            actively developing the mobile app for Android and iOS platforms.
          </p>
        </section>
      </main>
    </>
  );
};

export default page;
