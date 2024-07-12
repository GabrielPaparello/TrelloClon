"use client";
import React from "react";
import Nav from "@/app/components/nav";
import WorkingBar from "../components/workingBar";
import { useSelector } from "react-redux";
import { openDetail } from "../lib/ReducersSelector/selector";
import Homenav from "../components/Homenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const toggle = useSelector(openDetail);

  return (
    <>
      <div className={``}>
        <div className={`${toggle ? "blur-sm bg-black/65" : ""} bg-white `}>
          <nav>
            <Homenav />
            <Nav />
          </nav>
        </div>

        <div className={` p-6  md:p-12 bg-white  `}>{children}</div>
      </div>
    </>
  );
}
