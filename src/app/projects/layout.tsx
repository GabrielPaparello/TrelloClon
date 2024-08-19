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
    <>
      <Nav />
      <main className="bg-white min-h-[70vh]">{children}</main>
    </>
  );
}
