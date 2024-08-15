import React from "react";
import Image from "next/image";
import Link from "next/link";
import links from "./utils/rules";
import "../../../app/globals.css";
export const DesktopNav = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  return (
    <nav className="justify-between px-2 bg-[#191552] relative z-10  md:flex hidden">
      <div className="flex items-center  space-x-2">
        <Image
          src="/assets/logo.png"
          alt="logoBrand"
          width={59}
          height={59}
          className="rounded-full mb-2 w-[49px] h-auto"
        />
        <h1 className="text-[#6ee2f5] text-transparent bg-clip-text bg-gradient-to-r from-[#6ee2f5] via-purple-500 to-[#6ee2f5] text-xl font-bold tracking-wider">
          BoardStack
        </h1>
      </div>
      {title !== "null" && (
        <h2 className="self-center m-auto text-white text-center">{title}</h2>
      )}
      <ul className="flex text-base items-center justify-center space-x-6 m-4">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <li
              key={link.path}
              className="raleway flex space-x-2 uppercase font-light  tracking-[0.2em] items-center  justify-center"
            >
              {path === link.path ? (
                <h3 key={link.name} className={`text-gray-600 cursor-none `}>
                  {/* <IconComponent
                    className={` mr-2 mb-2 ${
                      path !== link.path ? "" : "text-gray-600 "
                    }`}
                  /> */}
                  {link.name}
                </h3>
              ) : (
                <>
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-white hover:text-[#6ee2f5] transition duration-700`}
                  >
                    {/* <IconComponent
                      className={`mr-2 mb-2 duration-700 hover:text-[#6ee2f5] ${
                        path !== link.path
                          ? "hover:text-[#6ee2f5]"
                          : "text-gray-600 hover:text-none"
                      }`}
                    /> */}
                    {link.name}
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <aside className="absolute inset-1 -z-10 animate-pulse border-[#6ee2f5]/40 border-offset-2 border-b-[2.5px] "></aside>
    </nav>
  );
};
