"use client";
import React from "react";
import {
  addCard,
  modifyCard,
  addTaskToCard,
  saveData,
  loadData,
} from "../lib/StatesReducers/createCard";
import { useAppDispatch } from "../lib/store";
import { useSelector } from "react-redux";
import {
  cardEdit,
  
  
} from "../lib/ReducersSelector/selector";
import { Edit } from "@mui/icons-material";
import Draggable from "react-draggable";
import ListsAdder from "./ListsAdder";
import { useUser } from "@auth0/nextjs-auth0/client";

const Cards = () => {
  const { user, error, isLoading } = useUser();
  const user_id = user?.sub.split("|")[1];
  const dispatch = useAppDispatch();
  const cards = useSelector(cardEdit);
  const handleSave = () => {
    dispatch(saveData({user_id,cards}))
    alert("saved")
    
  }
  return (
    <>
      
      <button className='absolute top-0 md:right-0 bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => dispatch(loadData(user_id))}>Load</button>
      <button className="absolute md:top-15 md:right-0 bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>Save</button>
      {cards.map((card) => (
        <>
          <Draggable>
            <div className={` flex md:flex-col    shadow-xl  bg-gray-100 w-fit `}>
              <div className=" align-middle p-4 content-center text-center">
                <div
                  onClick={() =>
                    dispatch(modifyCard({ ...card, editable: true }))
                  }
                >
                  {card.editable ? (
                    <input
                      placeholder="project name/list"
                      required
                      className="placeholder:text-black shadow-xl  bg-transparent focus:outline-none p-2"
                      type="text"
                      value={card.CARD_NAME}
                      onChange={(e) =>
                        dispatch(
                          modifyCard({ ...card, CARD_NAME: e.target.value })
                        )
                      }
                      onBlur={() =>
                        dispatch(modifyCard({ ...card, editable: false }))
                      }
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        dispatch(modifyCard({ ...card, editable: false }))
                      }
                      autoFocus
                    />
                  ) : (
                    <div className=" flex align-middle p-4 content-center text-center">
                      <span>
                        {card.CARD_NAME ? card.CARD_NAME : "List Name"}
                      </span>
                      <Edit className="relative cursor-pointer ml-1  text-base  opacity-50 text-gray-400  " />
                    </div>
                  )}
                </div>

                <div
                  className={`flex align-middle content-center text-center pl-5`}
                ></div>
                {card.tasks && <ListsAdder key={card.PARENT_ID} card={card} />}
                <button
                  onClick={() =>
                    dispatch(
                      addTaskToCard({
                        PARENT_ID: card.PARENT_ID,
                        TASK_NAME: "",
                      })
                    )
                  }
                  className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
                >
                  + Add list
                </button>
              </div>
            </div>
          </Draggable>
        </>
      ))}
      <button
        onClick={() => dispatch(addCard())}
        className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
      >
        + Add Card
      </button>
    </>
  );
};

export default Cards;
