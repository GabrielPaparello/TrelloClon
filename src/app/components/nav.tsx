/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePathname, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAppDispatch } from "../lib/store";
import { useSelector } from "react-redux";
import { cardEdit } from "../lib/ReducersSelector/selector";
import { loadData, saveData, Card } from "../lib/StatesReducers/createCard";
import { setToast } from "../lib/StatesReducers/toast";
import { useParams } from "next/navigation";
const Nav = () => {
  const dispatch = useAppDispatch();
  const cards = useSelector(cardEdit);
  const { user, error, isLoading } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const [toggleNav, setToggleNav] = useState(false);
  const path = usePathname();

  const params = useParams();
  const searchParams = useSearchParams();

  const projectId = params.projectId as string;

  useEffect(() => {
    dispatch(loadData({ user_id, projectId }));
  }, [user_id, dispatch]);

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

  return (
    <nav
      className={`${
        !toggleNav ? "translate-x-0" : "-translate-x-[200px] h-[88vh] absolute"
      } flex flex-col duration-300 max-w-[230px] min-w-[230px] justify-center items-center left-0  h-[88vh] shadow-xl shadow-gray-500 ring-1 ring-[#0079d3] bg-[#0079d3]   `}
    >
      <div className="flex-grow mt-10 relative">
        <img
          className="border h-[105px] w-[105px] shadow-xl  border-gray-400 rounded-full"
          src={user?.picture || "/assets/placeholders/profilePlaceholder.jpg"}
          alt="Profile"
          width={100}
          height={100}
        />
        <h2 className="max-w-[190px] text-center text-white">
          Welcome back! <br />
          {user?.name}
        </h2>
      </div>

      {user && (
        <div className="border-[#0079d3] border-b p-4">
          <button
            className="text-[#004f8c] font-bold rounded px-4 py-1 mr-2"
            onClick={() => dispatch(loadData({ user_id, projectId }))}
          >
            Load
          </button>
          <button
            className="text-[#004f8c] font-bold rounded px-4 py-1"
            onClick={() => handleSave(user_id, projectId, cards)}
          >
            Save
          </button>
        </div>
      )}

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
          className="absolute top-[50%] left-[193px] bg-gray-200 rounded-full border border-gray-200"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? (
            <ChevronRightIcon className="text-4xl" />
          ) : (
            <ChevronLeftIcon className="text-4xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
