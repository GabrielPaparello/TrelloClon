"use client";
import React from "react";
import {
  addCard,
  modifyCard,
  addTaskToCard,
} from "../lib/StatesReducers/createCard";
import { useAppDispatch } from "../lib/store";
import { useSelector } from "react-redux";
import {
  cardEdit,
  selectProjectValue,
  setEdit,
} from "../lib/ReducersSelector/selector";
import {
  setEditable,
  setProjectName,
} from "../lib/StatesReducers/projectSlice";
import { Edit } from "@mui/icons-material";
import Draggable from "react-draggable";
import ListsAdder from "./ListsAdder";

const Cards = () => {
  const dispatch = useAppDispatch();
  const editVal = useSelector(setEdit);
  const projectName = useSelector(selectProjectValue);
  const cards = useSelector(cardEdit);
  return (
    <>
      <button
        onClick={() => dispatch(addCard())}
        className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
      >
        + Add Card
      </button>
      {cards.map((card) => (
        <>
          <Draggable>
            <div className={` flex flex-col    shadow-xl  bg-gray-100 w-fit `}>
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
                          {cards.map((list) => (
                        <>
                    {list.tasks && list.tasks.map((list) => {
                      return (
                        <>
                          <div
                            id={list.TASK_ID}
                            key={list.TASK_ID}
                            className=""
                          >
                            <ListsAdder key={list.TASK_ID} list={list} />
                          </div>
                        </>
                      );
                    })}
            </>
          ))}
                <button
                  onClick={() => dispatch(addTaskToCard({ PARENT_ID: card.PARENT_ID, TASK_NAME: '' }))}
                  className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
                >
                  + Add list
                </button>
              </div>
            </div>
          </Draggable>
        </>
      ))}
          {/* // <>
            //   <div  key={list.PARENT_ID} className="">
            //     <ListsAdder key={list.PARENT_ID} list={list} />
            //   </div>
            // </> */}
    </>
  );
};

export default Cards;
