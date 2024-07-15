"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../globals.css";
import { Menu } from "@mui/icons-material";

const Homenav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" justify-between bg-[#191552] md:flex hidden">
        <aside className="flex items-center ">
          <Image
            src="/assets/logo.png"
            alt="logoBrand"
            width={59}
            height={59}
          />
          <h2 className={`raleway text-center text-[24px] text-[#6ee2f5]`}>
            BoardStack
          </h2>
        </aside>
        <ul className="flex">
          <li>
            <h4 className="fira text-white">Link 1</h4>
          </li>
          <li className="fira text-white">Link 2</li>
        </ul>
      </nav>
      {/* FOR MOBILE */}
      <nav className="  p-2 bg-[#191552] md:hidden flex">
        <Menu
          className="text-[#F4F3F0]  "
          fontSize="large"
          onClick={() => setOpen(!open)}
        />
        <aside className="flex flex-col items-start   ">
          <div
            className={`bg-[#21232B] rounded-lg shadow-sm shadow-[#F4F3F0] p-5 absolute transition-all duration-700 ${
              open ? "left-5 top-14" : "-left-[400px] top-10"
            }`}
          >
            <div className="flex items-center  ">
              <Image
                src="/assets/logo.png"
                alt="logoBrand"
                width={59}
                height={59}
              />
              <h2 className={`raleway text-center text-[24px] text-[#6ee2f5]`}>
                BoardStack
              </h2>
            </div>
            <ul className="flex flex-col gap-2 pt-5 text-center">
              <li>
                <h4 className="fira text-white">Link 1</h4>
              </li>
              <li className="fira text-white">Link 2</li>
            </ul>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Homenav;
