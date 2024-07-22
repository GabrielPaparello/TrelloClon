/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    id: "home",
    name: "home",
    path: "/",
  },
  {
    id: "learn",
    name: "Learn",
    path: "/learnBoardStack",
  },
  {
    id: "projects",
    name: "Get Started",
    path: "/projects",
  },
];
const Homenav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="justify-between bg-[#191552] relative z-10  md:flex hidden">
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
        <ul className="flex items-center justify-center space-x-6 m-4">
          {links.map((link) => {
            return (
              <>
                <li key={link.name} className="fira font-medium tracking-wider">
                  {path === link.path ? (
                    <h3 className={`text-gray-600 cursor-none  `}>
                      {link.name}
                    </h3>
                  ) : (
                    <Link
                      href={link.path}
                      className={`text-white hover:text-[#6ee2f5] transition duration-300`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              </>
            );
          })}
        </ul>
        <aside className="absolute inset-1 -z-10 animate-pulse border-[#6ee2f5]/20 border-offset-2 border-b-2   "></aside>
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
              {links.map((link) => {
                return (
                  <>
                    <li className="fira font-medium tracking-wider">
                      {path === link.path ? (
                        <h3 className={`text-gray-600 cursor-none `}>
                          {link.name}
                        </h3>
                      ) : (
                        <Link
                          href={link.path}
                          className={`text-white hover:text-[#6ee2f5] transition duration-300`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </aside>
        )}
      </nav>
    </>
  );
};

export default Homenav;
