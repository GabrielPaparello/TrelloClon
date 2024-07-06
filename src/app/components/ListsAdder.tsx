import React from "react";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { useAppDispatch } from "../lib/store";
import {
  modifyTaskfromCard,
  deleteTaskfromCard,
} from "../lib/StatesReducers/createCard";
import { toggle } from "../lib/StatesReducers/openDetails";
import { Card } from "../lib/StatesReducers/createCard";
import { Task } from "../lib/StatesReducers/createCard";
import Details from "./Details";

const ListsAdder = ({ card }: { card: Card }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (PARENT_ID: string, TASK_ID: string) => {
    console.log(
      `Dispatching delete for task ${TASK_ID} from card ${PARENT_ID}`
    );
    dispatch(deleteTaskfromCard({ PARENT_ID, TASK_ID }));
  };

  const handleDetailClick = ({ list }: { list: Task }) => {
    dispatch(modifyTaskfromCard({ ...list, detailOpen: !list.detailOpen }));
    dispatch(toggle());
  };

  return (
    <>
      {card.tasks &&
        card.tasks.map((list) => (
          <div
            key={list.TASK_ID}
            className="flex mb-2 align-middle content-center shadow-xl text-center p-4 pl-5 h-[70px]"
          >
            {list.editable ? (
              <input
                placeholder="Insert Task Name"
                required
                className="placeholder:text-gray-400 bg-transparent focus:outline-none p-2"
                type="text"
                value={list.TASK_NAME}
                onChange={(e) =>
                  dispatch(
                    modifyTaskfromCard({
                      ...list,
                      TASK_NAME: e.target.value,
                    })
                  )
                }
                onBlur={() =>
                  dispatch(modifyTaskfromCard({ ...list, editable: false }))
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  dispatch(modifyTaskfromCard({ ...list, editable: false }))
                }
                autoFocus
              />
            ) : (
              <div className="flex align-middle space-x-2 content-center text-center">
                <span
                  className={`${
                    list.TASK_NAME ? "" : "text-gray-400"
                  }`}
                >
                  {list.TASK_NAME ? list.TASK_NAME : "Insert card name"}
                </span>
                <Edit
                  onClick={() =>
                    dispatch(modifyTaskfromCard({ ...list, editable: true }))
                  }
                  className="cursor-pointer ml-1 opacity-50 text-gray-400"
                />
              </div>
            )}
            <Delete
              onClick={() => handleDelete(list.PARENT_ID, list.TASK_ID)}
              className="cursor-pointer text-lg opacity-50 text-gray-400"
            />
            <MoreVert
              onClick={() => handleDetailClick({ list })}
              className="cursor-pointer text-lg opacity-50 text-gray-400"
            />
            {list.detailOpen && <Details list={list} />}
          </div>
        ))}
    </>
  );
};

export default ListsAdder;
