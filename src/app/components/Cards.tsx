"use client";
import React, { useEffect, useState } from "react";
import {
  addCard,
  modifyCard,
  addTaskToCard,
  saveData,
  loadData,
  deleteCard,
  Card,
} from "../lib/StatesReducers/createCard";
import { useAppDispatch } from "../lib/store";
import { useSelector } from "react-redux";
import { cardEdit } from "../lib/ReducersSelector/selector";
import { Delete, Edit } from "@mui/icons-material";
import Draggable from "react-draggable";
import ListsAdder from "./ListsAdder";
import { useUser } from "@auth0/nextjs-auth0/client";
import Details from "./Details";
import { v4 as uuid } from "uuid";

const Cards = () => {
  const { user, error, isLoading } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const dispatch = useAppDispatch();
  const cards = useSelector(cardEdit);
  const handleSave = (user_id: string | undefined, cards: Card[]) => {
    dispatch(saveData({ user_id, cards }));
    alert("saved");
  };
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  },[])
  return (
    <>
      <button
        onClick={() => dispatch(addCard())}
        className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
      >
        + Add Card
      </button>
      <div className="fixed top-0 border-[#0079d3]  border-b ">

      <button
        className="text-[#004f8c]  font-bold rounded"
        onClick={() => dispatch(loadData(user_id))}
      >
        Load
      </button>
      <button
        className="text-[#004f8c]  font-bold px-6 rounded"
        onClick={() => handleSave(user_id, cards)}
      >
        Save
      </button>
      </div>
      {cards.map((card) => (
        <>
          {!isMobile ?
            
            <Draggable>
              <div
                className={` flex md:flex-col   shadow-xl  bg-gray-100 w-fit `}
              >
                <div className=" align-middle p-4 content-center text-center">
                  {open && (
                    <Details />
                  )}
                  <div>
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
                      <div onClick={() => setOpen(true)} className=" flex align-middle p-4 content-center text-center">
                       
                        <span>
                          {card.CARD_NAME ? card.CARD_NAME : "List Name"}
                        </span>
                        
                        <Edit
                          className="relative cursor-pointer ml-1  p-0.5  opacity-50 text-gray-400  "
                          onClick={() =>
                            dispatch(modifyCard({ ...card, editable: true }))
                          }
                        />
                        <button
                          onClick={() => dispatch(deleteCard(card.PARENT_ID))}
                        >
                          <Delete className="relative cursor-pointer ml-1 p-0.5 text-base  opacity-50 text-gray-400  " />
                        </button>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex align-middle content-center text-center pl-5`}
                  ></div>
                  {card.tasks && <ListsAdder key={uuid()} card={card} />}
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
            :
            <div
              className={` flex md:flex-col   shadow-xl  bg-gray-100 w-fit `}
            >
              <div className=" align-middle p-4 content-center text-center">
                {open && (
                  <Details />
                )}
                <div>
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
                    <div onClick={() => setOpen(true)} className=" flex align-middle p-4 content-center text-center">
                       
                      <span>
                        {card.CARD_NAME ? card.CARD_NAME : "List Name"}
                      </span>
                        
                      <Edit
                        className="relative cursor-pointer ml-1  p-0.5  opacity-50 text-gray-400  "
                        onClick={() =>
                          dispatch(modifyCard({ ...card, editable: true }))
                        }
                      />
                      <button
                        onClick={() => dispatch(deleteCard(card.PARENT_ID))}
                      >
                        <Delete className="relative cursor-pointer ml-1 p-0.5 text-base  opacity-50 text-gray-400  " />
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={`flex align-middle content-center text-center pl-5`}
                ></div>
                {card.tasks && <ListsAdder key={uuid()} card={card} />}
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
          }
          
        </>
      ))}
    </>
  );
};

export default Cards;
