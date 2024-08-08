import Image from "next/image";
import React from "react";
import { Menu } from "@mui/icons-material";

import Link from "next/link";
import links from "./utils/rules";
import "../../../app/globals.css";
export const MobileNav = ({
  open,
  setOpen,
  path,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}) => {
  return (
    <nav className="p-2 bg-[#191552] md:hidden flex items-center justify-between">
      <Menu
        className="text-[#F4F3F0] cursor-pointer"
        fontSize="large"
        onClick={() => setOpen(!open)}
      />

      <aside
        className={`absolute ease-in-out left-2 top-14 h-[350px] bg-[#191552]/[0.99] ring-2 duration-700 ring-[#000000]/20 rounded-lg shadow-md flex items-start p-2 gap-5 justify-start flex-col w-60 ${
          open ? "" : "left-[-100%]"
        }`}
      >
        <div className="flex items-center ml-1 ">
          <h2 className="text-[#6ee2f5] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#6ee2f5] via-purple-500 to-[#6ee2f5] text-2xl font-bold">
            BoardStack
          </h2>{" "}
          <Image
            src="/assets/logo.png"
            alt="logoBrand"
            width={50}
            height={50}
            className="rounded-full pb-4"
          />
        </div>
        <ul className="flex flex-col gap-10 text-white ml-1">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <li
                key={link.path}
                className="fira flex space-x-2 uppercase font-medium tracking-widest items-center  justify-center"
              >
                {path === link.path ? (
                  <h3 key={link.name} className={`text-gray-600 cursor-none `}>
                    <IconComponent
                      className={` mr-2 mb-2 ${
                        path !== link.path ? "" : "text-gray-600 "
                      }`}
                    />
                    {link.name}
                    <hr className=" h-[2px] w-[200px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25 dark:via-neutral-400" />
                  </h3>
                ) : (
                  <>
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-white hover:text-[#6ee2f5] transition duration-700`}
                    >
                      <IconComponent
                        className={`mr-2 mb-2 duration-700 hover:text-[#6ee2f5] ${
                          path !== link.path
                            ? "hover:text-[#6ee2f5]"
                            : "text-gray-600 hover:text-none"
                        }`}
                      />
                      {link.name}
                      <hr className=" h-[2px] w-[200px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25 dark:via-neutral-400" />
                    </Link>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};
