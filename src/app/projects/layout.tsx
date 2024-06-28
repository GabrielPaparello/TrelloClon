"use client";
import React from "react";
import Nav from "@/app/components/nav";
import WorkingBar from "../components/workingBar";
import { Provider } from "react-redux";
import store from "@/app/lib/store";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div  className="fixed  w-full  ">

      <WorkingBar />
      </div>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Nav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    
    </Provider>
  );
}