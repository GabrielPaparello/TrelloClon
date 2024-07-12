"use client";

import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useAppDispatch } from "../lib/store";
import {
  addCard,
  loadData,
  saveData,
  Card,
} from "../lib/StatesReducers/createCard";
import { useSelector } from "react-redux";
import { cardEdit } from "../lib/ReducersSelector/selector";
import { useUser } from "@auth0/nextjs-auth0/client";
import { v4 as uuid } from "uuid";


const Project = () => {
  const { user } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadData(user_id));
  }, [user_id, dispatch]);

  const cards = useSelector(cardEdit);

  const handleSave = (user_id: string | undefined, cards: Card[]) => {
    dispatch(saveData({ user_id, cards }));
    alert("saved");
  };

  return (
    <>
    
    <main>
     
      <div className="flex flex-wrap gap-4 p-4">
        <button
          onClick={() => dispatch(addCard())}
          className="text-[#0079d3] font-bold pb-2 px-6 rounded"
        >
          + Add Card
        </button>
        {/* <div className="fixed top-0 border-[#0079d3] border-b p-4">
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
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {cards &&
            cards.map((card) => {
              return <Cards key={uuid()} card={card} />;
            })}
        </div>
      </div>
    </main>
    </>
  );
};

export default Project;
