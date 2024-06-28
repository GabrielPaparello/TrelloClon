"use client";

import Link from "next/link";
import React, { useState } from "react";
import ListsAdder from "../components/ListsAdder";
import { v4 as uuidv4 } from "uuid";
import {  Edit } from "@mui/icons-material";
import {  useAppDispatch, useAppSelector } from "../lib/store";
import {  } from "../lib/StatesReducers/reducers";
import { setProjectName } from "../lib/StatesReducers/projectSlice";
import { useSelector } from "react-redux";
import { selectProjectValue, setEdit, setList, task } from "../lib/ReducersSelector/selector";
import { addTask } from "../lib/StatesReducers/ListSlice";
import { deleteTask } from "../lib/StatesReducers/ListSlice";
import { setEditable } from "../lib/StatesReducers/projectSlice";
const Project = () => {
  // const [edittable, setEditable] = useState(true);
  const projectName = useSelector(selectProjectValue);
  const tasks = useSelector(task);
  const editVal = useSelector(setEdit);

  
 const dispatch = useAppDispatch();
  return (
    <main>
      <div className="flex flex-col bg-gray-100 w-fit ">
        <div className="flex flex-col align-middle p-4 content-center text-center ">
          <div onClick={() => dispatch(setEditable(true))}>
            {editVal ? (
              <input
                placeholder="project name/list"
                required
                className="placeholder:text-black shadow-xl bg-white bg-transparent focus:outline-none p-2"
                type="text"
                value={projectName}
                onChange={(e) => dispatch(setProjectName(e.target.value))}
                onBlur={() => dispatch(setEditable(false))}
                onKeyDown={(e) => e.key === "Enter" && dispatch(setEditable(false))}
                autoFocus
              />
            ) : (
              <div className=" flex align-middle p-4 content-center text-center">
                <span>{projectName ? projectName : "project name/list"}</span>
                <Edit className="relative cursor-pointer ml-1  text-base  opacity-50 text-gray-400  " />
              </div>
            )}
          </div>

          <div
            className={`flex align-middle content-center text-center pl-5`}
          ></div>
          {tasks.map((list) => (
            <>
              <div id={list.TASK_ID} key={list.TASK_ID} className="">
                <ListsAdder
                  key={list.TASK_ID}
                  
                  list={list}
                />
              </div>
            </>
          ))}
        </div>
        <button
          onClick={() => dispatch(addTask())}
          className="text-[#0079d3]  font-bold pb-2 px-6 rounded"
        >
          + Add list
        </button>
      </div>
      <div>
        {/* <h1>Create Project</h1>
          <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="projects/create-project">Start Project</Link>
          </button> */}
      </div>
    </main>
  );
};

export default Project;
