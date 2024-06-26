'use client'

import { Add, Edit } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const Project = () => {
  const [projectName, setProjectName] = useState("");
  return (
    <main>
      <div className="flex flex-col bg-gray-100 w-fit ">

        <div className="flex flex-col align-middle content-center text-center   p-5">
          <div className="flex align-middle content-center text-center p-2 pl-5">

            <input draggable onChange={(e) => setProjectName(e.target.value)} type="text" placeholder="project name/list" required className="placeholder:text-black shadow-xl bg-white bg-transparent focus:outline-none p-2"></input><Edit className="relative right-5 top-2 text-base  opacity-50 text-gray-400  " />
          </div>
          {projectName ? 
          <div className={`flex align-middle content-center text-center pl-5`}>
            <input type="text" className={` placeholder:text-black shadow-xl bg-white bg-transparent focus:outline-none p-2`}></input><Add className="relative top-2 right-5 text-base  opacity-50 text-gray-400 " />
          </div>
        :null}
      </div>
      </div>
      <div>
          {/* <h1>Create Project</h1>
          <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="projects/create-project">Start Project</Link>
          </button> */}
      </div>
    </main>
  );
};

export default Project;
