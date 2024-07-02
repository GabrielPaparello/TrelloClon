"use client";

import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useAppDispatch } from "../lib/store";
import { loadData } from "../lib/StatesReducers/createCard";
import { useSelector } from "react-redux";
import { cardEdit } from "../lib/ReducersSelector/selector";
import { useUser } from "@auth0/nextjs-auth0/client";

const Project = () => {
  const { user, error, isLoading } = useUser();
const user_id = user?.sub?.split("|")[1];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadData(user_id));
    
  }, [dispatch]);
  const cards = useSelector(cardEdit);

  return (
    
    <main>
       
      <div className="flex flex-wrap">
        {cards ? <Cards /> : "Loading..."}
        
      </div>
    </main>
  );
  ;
}
export default Project;
