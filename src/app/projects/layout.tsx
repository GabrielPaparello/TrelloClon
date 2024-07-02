"use client";
import React from "react";
import Nav from "@/app/components/nav";
import WorkingBar from "../components/workingBar";
import { Provider} from "react-redux";
import store from "@/app/lib/store";
export default function Layout({ children }: { children: React.ReactNode }) {
     
  return (
    <Provider store={store}>
     
      <div className="flex h-[100vh]">
      
      <Nav />
      
      <div className=" p-6  md:p-12">{children}</div>
      </div> 
      
    
    
      </Provider>
  );
}
