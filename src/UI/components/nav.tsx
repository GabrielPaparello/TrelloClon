/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePathname, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAppDispatch } from "../../lib/store";
import { useSelector } from "react-redux";
import { cardEdit } from "../../lib/ReducersSelector/selector";
import { loadData, saveData, Card } from "../../lib/StatesReducers/createCard";
import { setToast } from "../../lib/StatesReducers/toast";

const Nav = () => {
  const dispatch = useAppDispatch();
  const cards = useSelector(cardEdit);
  const { user, error, isLoading } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const [toggleNav, setToggleNav] = useState(false);
  const path = usePathname();

  // useEffect(() => {
  //   dispatch(loadData({ user_id, projectId }));
  // }, [user_id, dispatch]);

  useEffect(() => {
    if (path === "/projects/create-project") {
      setToggleNav(true);
    }
  }, [path]);

  const handleSave = (
    user_id: string | undefined,
    projectId: string,
    cards: Card[]
  ) => {
    dispatch(saveData({ user_id, cards, projectId }));
    dispatch(setToast(true));
  };
  // ring-[#0079d3]
  return (
    <nav
      className={`${
        !toggleNav ? "translate-x-0" : "-translate-x-[230px] "
      } flex flex-col z-50 duration-500 max-w-[230px] min-w-[230px] justify-center items-center left-0   absolute shadow-md shadow-black ring-1 min-h-[100vh] bg-gray-200 ring-gray-400 border-l-3xl  `}
    >
      <div className="flex-grow mt-3 relative">
        <img
          className="border h-[105px] w-[105px]  shadow-sm shadow-black  border-gray-400 rounded-full"
          src={user?.picture || "/assets/placeholders/profilePlaceholder.jpg"}
          alt="Profile"
          width={100}
          height={100}
        />
        <h2 className="max-w-[190px] text-center mt-6 text-gray-500">
          Welcome back! <br />
          {user?.name}
        </h2>
      </div>

      <div className="flex flex-col space-y-10 flex-grow">
        {!user ? (
          <a
            className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            href="/api/auth/login"
          >
            Login
          </a>
        ) : (
          <a
            className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            href="/api/auth/logout"
          >
            Logout
          </a>
        )}
      </div>

      <div className="">
        <button
          className={`absolute top-[50%] transition-all duration-500 ${
            toggleNav
              ? "left-[220px]  bg-gray-400/20 rounded-r-3xl ring-1 ring-gray-500 shadow-sm shadow-black"
              : "left-[197px] bg-gray-400/20 rounded-full  ring-1 ring-gray-500 shadow-sm shadow-black"
          } `}
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? (
            <ChevronRightIcon className="text-3xl pl-1 " />
          ) : (
            <ChevronLeftIcon className="text-3xl pr-1 " />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
