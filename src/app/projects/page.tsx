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
    if (user_id) {
      dispatch(loadData(user_id));
    }
  }, [user_id, dispatch]);

  const cards = useSelector(cardEdit);

  const handleSave = (user_id: string | undefined, cards: Card[]) => {
    dispatch(saveData({ user_id, cards }));
    alert("Saved successfully!");
  };

  return (
    <main className="px-4 py-8 md:px-8 lg:px-16 xl:px-32">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Project Board</h1>
        <button
          onClick={() => dispatch(addCard())}
          className="text-white bg-[#0079d3] hover:bg-blue-600 py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          + Add Card
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards &&
          cards.map((card) => <Cards key={card.PARENT_ID} card={card} />)}
      </div>
    </main>
  );
};

export default Project;
