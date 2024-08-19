import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { useAppDispatch } from "../../lib/store";
import {
  modifyCard,
  deleteCard,
  addTaskToCard,
  reorderTasksInCard,
  Card,
} from "../../lib/StatesReducers/createCard";
import ListsAdder from "./ListsAdder";
import type { DropResult } from "react-beautiful-dnd";
import { useUser } from "@auth0/nextjs-auth0/client";
import { v4 as uuid } from "uuid";
import { useParams } from "next/navigation";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Cards = ({ card }: { card: Card }) => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const params = useParams();
  const projectId = params.projectId as string;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside the list
    if (!destination) {
      return;
    }

    // Dispatch action to reorder tasks within the card
    dispatch(
      reorderTasksInCard({
        PARENT_ID: card.PARENT_ID,
        startIndex: source.index,
        endIndex: destination.index,
      })
    );
  };
  // useEffect(() => {
  //   dispatch(saveData({ user_id, projectId, cards }));
  // }, [dispatch]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="">
        <div className="flex flex-col shadow-sm rounded-md bg-gray-300/60 ring-1 ring-gray-500/80 p-2 shadow-gray-500 ">
          <div className="p-2 text-center">
            {card.editable ? (
              <input
                placeholder="Project Name/List"
                required
                className=" ring-1 rounded-md ring-gray-500/80 bg-white shadow-sm shadow-white focus:outline-none p-2 text-black"
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
              <div className="flex justify-between items-center">
                <span className="text-black">
                  {card.CARD_NAME || "List Name"}
                </span>
                <div className="flex items-center">
                  <Edit
                    className="cursor-pointer ml-1 opacity-50 text-gray-400 hover:text-blue-500"
                    onClick={() =>
                      dispatch(modifyCard({ ...card, editable: true }))
                    }
                  />
                  <button onClick={() => dispatch(deleteCard(card.PARENT_ID))}>
                    <Delete className="cursor-pointer ml-1 opacity-50 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* <Droppable droppableId={uuid()}>
            {(provided) => (
              <>
                {card.tasks && (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ListsAdder key={uuid()} card={card} />
                    {provided.placeholder}
                  </div>
                )}
              </>
            )}
          </Droppable> */}
          <Droppable droppableId={card.PARENT_ID}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ListsAdder key={uuid()} card={card} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

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
            + Add List
          </button>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Cards;
