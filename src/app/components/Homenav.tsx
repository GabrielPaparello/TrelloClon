/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "@mui/icons-material";

const Homenav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="justify-between bg-[#191552]  md:flex hidden">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="logoBrand"
            width={59}
            height={59}
            className="rounded-full"
          />
          <h2 className="text-[#6ee2f5] text-transparent bg-clip-text bg-gradient-to-r from-[#6ee2f5] via-purple-500 to-[#6ee2f5] text-2xl font-bold">
            BoardStack
          </h2>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-white hover:text-[#6ee2f5] transition duration-300"
            >
              Link 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-[#6ee2f5] transition duration-300"
            >
              Link 2
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="p-2 bg-[#191552] md:hidden flex items-center justify-between">
        <Menu
          className="text-[#F4F3F0] cursor-pointer"
          fontSize="large"
          onClick={() => setOpen(!open)}
        />
        {open && (
          <aside className="absolute left-0 top-14 bg-[#21232B] rounded-lg shadow-md p-5 w-60">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/assets/logo.png"
                alt="logoBrand"
                width={59}
                height={59}
                className="rounded-full"
              />
              <h2 className="text-[#6ee2f5] text-2xl font-bold">BoardStack</h2>
            </div>
            <ul className="flex flex-col gap-2 text-white">
              <li>
                <a
                  href="#"
                  className="hover:text-[#6ee2f5] transition duration-300"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6ee2f5] transition duration-300"
                >
                  Link 2
                </a>
              </li>
            </ul>
          </aside>
        )}
      </nav>
    </>
  );
};

export default Homenav;
