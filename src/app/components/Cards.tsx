"use client";
import React, { useEffect, useState } from "react";
import {
  addCard,
  modifyCard,
  addTaskToCard,
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
import { v4 as uuid } from "uuid";

const Cards = ({ card }: { card: Card }) => {
  const { user } = useUser();
  const dispatch = useAppDispatch();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className="w-full md:w-auto">
      {!isMobile ? (
        <Draggable>
          <div className="flex flex-col shadow-xl bg-gray-100 w-full md:w-72">
            <div className="p-4 text-center">
              {card.editable ? (
                <input
                  placeholder="project name/list"
                  required
                  className="shadow-xl bg-transparent focus:outline-none p-2 text-black"
                  type="text"
                  value={card.CARD_NAME}
                  onChange={(e) =>
                    dispatch(modifyCard({ ...card, CARD_NAME: e.target.value }))
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
                <div className="flex justify-between  items-center">
                  <span className="text-black">
                    {card.CARD_NAME ? card.CARD_NAME : "List Name"}
                  </span>
                  <div className="flex items-center">
                    <Edit
                      className="cursor-pointer ml-1 opacity-50 text-gray-400"
                      onClick={() =>
                        dispatch(modifyCard({ ...card, editable: true }))
                      }
                    />
                    <button
                      onClick={() => dispatch(deleteCard(card.PARENT_ID))}
                    >
                      <Delete className="cursor-pointer ml-1 opacity-50 text-gray-400" />
                    </button>
                  </div>
                </div>
              )}
            </div>
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
              className="text-[#0079d3] font-bold pb-2 px-6 rounded"
            >
              + Add list
            </button>
          </div>
        </Draggable>
      ) : (
        <div className="flex flex-col shadow-xl bg-gray-100 w-full md:w-72">
          <div className="p-4 text-center">
            {card.editable ? (
              <input
                placeholder="project name/list"
                required
                className="shadow-xl bg-transparent focus:outline-none p-2 text-black"
                type="text"
                value={card.CARD_NAME}
                onChange={(e) =>
                  dispatch(modifyCard({ ...card, CARD_NAME: e.target.value }))
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
              <div className="flex justify-between  items-center">
                <span className="text-black">
                  {card.CARD_NAME ? card.CARD_NAME : "List Name"}
                </span>
                <div className="flex items-center">
                  <Edit
                    className="cursor-pointer ml-1 opacity-50 text-gray-400"
                    onClick={() =>
                      dispatch(modifyCard({ ...card, editable: true }))
                    }
                  />
                  <button onClick={() => dispatch(deleteCard(card.PARENT_ID))}>
                    <Delete className="cursor-pointer ml-1 opacity-50 text-gray-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
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
            className="text-[#0079d3] font-bold pb-2 px-6 rounded"
          >
            + Add list
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
