/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import ReLinkct, { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from "next/image";
import { ChevronRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAppDispatch } from "../lib/store";
import { useSelector } from "react-redux";
import { cardEdit } from "../lib/ReducersSelector/selector";

const Nav = () => {
  const links = [{
    home: "/",
    newProject: "/create-project",
    currentProjects: "/current-projects",
    completedProjects: "/completed-projects",
  }];
  const [toggleNav, setToggleNav] = useState(false);
    const dispatch = useAppDispatch();
  const cards = useSelector(cardEdit);

  const path = usePathname();
  useEffect(() => {
    
    if(path === "/projects/create-project") {setToggleNav(true)}
  }, [path])
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <nav className={`${!toggleNav ? "translate-x-0 " : "-translate-x-[200px] absolute "} flex flex-col duration-300 max-w-[230px] justify-center items-center left-0 h-[100vh] shadow-xl `
}>
      <div className="flex-grow mt-10">

        <img className=" border h-[105px] w-[105px] ml-[40px] border-gray-400 rounded-full" src={`${user?.picture}`} alt="logo" width={100} height={100} />
      
        <h2 className="max-w-[190px] text-center">Welcome back! <br></br> {user?.name}</h2>
      </div>
      {user ? 
      <div className=" border-[#0079d3] border-b p-4">
          <button
            className="text-[#004f8c] font-bold rounded"
            onClick={() => dispatch(loadData(user_id))}
          >
            Load
          </button>
          <button
            className="text-[#004f8c] font-bold px-6 rounded"
            onClick={() => handleSave(user_id, cards)}
          >
            Save
          </button>
        </div>
        :null}
      <div className=" flex flex-col space-y-10 ">
        {!user ?
          <a className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-1 text-center px-4 rounded " href="/api/auth/login">Login</a>
          :
          <a className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" href="/api/auth/logout">Logout</a>}
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
