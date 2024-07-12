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
      <nav>
        <Homenav />
      </nav>
      <div className={`flex h-[100vh]`}>
        <div className={`${toggle ? "blur-sm bg-black/65" : ""} bg-white `}>
          <Nav />
        </div>

        <div className={` p-6  md:p-12 bg-white  flex-1`}>{children}</div>
      </div>
    </>
  );
}
