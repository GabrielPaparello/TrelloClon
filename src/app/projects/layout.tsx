"use client";
import React from "react";
import Nav from "@/UI/components/nav";
import WorkingBar from "../../UI/components/workingBar";
import { useSelector } from "react-redux";
import { openDetail } from "../../lib/ReducersSelector/selector";
import Navbar from "../../UI/components/nav/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const toggle = useSelector(openDetail);

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex-shrink-0">
        <Navbar />
      </nav>
      <div className="flex flex-1 overflow-hidden">
        <div
          className={`flex-shrink-0 ${
            toggle ? "blur-sm bg-black/65" : ""
          } bg-white`}
        >
          <Nav />
        </div>
        <main className="flex-1 p-6 md:p-12 bg-white overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
