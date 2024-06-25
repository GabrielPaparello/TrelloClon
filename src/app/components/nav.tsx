"use client"
import Link from "next/link";
import ReLinkct, { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from "next/image";
import { ChevronRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";
const Nav = () => {
  const links = [{
    home: "/",
    newProject: "/create-project",
    currentProjects: "/current-projects",
    completedProjects: "/completed-projects",
  }];
  const [toggleNav, setToggleNav] = useState(false);
  const path = usePathname();
  useEffect(() => {
    
    if(path === "/projects/create-project") {setToggleNav(true)}
  },[path])
  return (
    <nav className={`${!toggleNav ? "translate-x-0" : "-translate-x-[200px]"} flex flex-col duration-300 max-w-[230px] justify-center items-center left-0 h-full  shadow-xl `
}>
      <div className="flex-grow mt-10">

      <Image className=" border h-[105px] w-[105px] ml-[40px] border-gray-400 rounded-full" src="/next.svg" alt="logo" width={100} height={100} />
      
      <h2 className="max-w-[190px] text-center">Welcome back! user_name</h2>
      </div>

      <div>
        <button onClick={() => setToggleNav(!toggleNav)}>

        {toggleNav ? <ChevronRight className="text-4xl absolute top-[50%] left-[193px]  bg-gray-200 rounded-full border border-gray-200" /> : <ChevronLeftIcon className="text-4xl absolute top-[50%] left-[193px]  bg-gray-200 rounded-full border border-gray-200" />}
        </button>
        <ul className="flex flex-col border-t border-gray-300  items-center space-y-4 mb-5 ">
          {links.map((element) => Object.entries(element).map(([key, value]) => (
            <li key={key} className={` p-2 w-[230px]`}>
              <Link href={value} className="text-gray-400 hover:text-gray-600" >{key}</Link>
            </li>
          )))}
      </ul>
      </div>
      </nav>
      
  );
};
export default Nav;
