import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { useAppDispatch } from "../lib/store";
import {
  modifyCard,
  deleteCard,
  addTaskToCard,
  Card,
} from "../lib/StatesReducers/createCard";
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
        <div className="flex flex-col shadow-xl bg-gray-100 w-full md:w-72">
          <div className="p-4 text-center">
            {card.editable ? (
              <input
                placeholder="Project Name/List"
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
              <div className="flex justify-between items-center">
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
                }),
              )
            }
            className="text-[#0079d3] font-bold pb-2 px-6 rounded"
          >
            + Add List
          </button>
        </div>
      ) : (
        <div className="flex flex-col shadow-xl bg-gray-100 w-full md:w-72">
          <div className="p-4 text-center">
            {card.editable ? (
              <input
                placeholder="Project Name/List"
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
              <div className="flex justify-between items-center">
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
                }),
              )
            }
            className="text-[#0079d3] font-bold pb-2 px-6 rounded"
          >
            + Add List
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
