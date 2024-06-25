"use client";
import { useState } from "react";
import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowUpward,
  
} from "@mui/icons-material";
const WorkingBar = () => {
  const [toggleBar, setToggleBar] = useState(false);

  return (
      <div onMouseEnter={() => setToggleBar(!toggleBar)}
        onMouseLeave={() => setToggleBar(!toggleBar)} className="fixed  w-full ">
          <div className="fixed top-0 right-0 z-index-10">
              
      <ArrowDropDown
        
        className="text-4xl    "
      />
          </div>

      <nav
        className={`${
          toggleBar ? "-translate-y-0" : "-translate-y-[101px]"
        } flex flex-col   duration-300  justify-center  bg-gray-100    shadow-xl `}
      >
        <div className="space-x-5 mr-5 flex justify-center  ">
          <button>Working Projects</button>
          <button>Completed Projects</button>
          <button>Team chat</button>
          <button>My tasks</button>
          <ArrowDropUp className="text-4xl absolute top-0 right-0" />
        </div>

        <div>
          {/* <button onClick={() => setToggleBar(!toggleBar)}>

        {!toggleBar ? <ChevronRight onMouseEnter={() => setToggleBar(!toggleBar)} className="text-4xl absolute   bg-gray-200 rounded-full border border-gray-200" /> : <ChevronLeftIcon onMouseEnter={() => setToggleBar(!toggleBar)}  className={` text-4xl absolute  bg-gray-200 rounded-full border border-gray-200`} />}
              </button> */}

          <ul className="flex flex-col border-t border-gray-300  items-center space-y-4 mb-5 "></ul>
        </div>
      </nav>
    </div>
  );
};
export default WorkingBar;
