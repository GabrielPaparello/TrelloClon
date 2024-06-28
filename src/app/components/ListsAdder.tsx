import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { useAppDispatch } from "../lib/store";
import { task } from "../lib/ReducersSelector/selector";
import { deleteTask } from "../lib/StatesReducers/ListSlice";
import { useSelector } from "react-redux";
import { modifyTask } from "../lib/StatesReducers/ListSlice";
const ListsAdder = ({ list }) => {
  const dispatch = useAppDispatch();
  const tasks = useSelector(task);

  const handleDelete = (TASK_ID: string) => {
    dispatch(deleteTask(list.TASK_ID));
  };

  return (
    <div
      onClick={() => dispatch(modifyTask({ ...list, editable: true }))}
      className="flex align-middle content-center text-center p-2 pl-5"
    >
      {list.editable ? (
        <input
          draggable
          placeholder="project name/list"
          required
          className="placeholder:text-black shadow-xl bg-white bg-transparent focus:outline-none p-2"
          type="text"
          value={list.TASK_NAME}
          onChange={(e) =>
            dispatch(modifyTask({ ...list, TASK_NAME: e.target.value }))
          }
          onBlur={() => dispatch(modifyTask({ ...list, editable: false }))}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            dispatch(modifyTask({ ...list, editable: false }))
          }
          autoFocus
        />
      ) : (
        <div className=" flex align-middle p-4 content-center text-center">
          <span>{list.TASK_NAME ? list.TASK_NAME : "project name/list"}</span>
          <Edit className="relative cursor-pointer ml-1  text-base  opacity-50 text-gray-400  " />
        </div>
      )}
      <Delete
        onClick={(list) => handleDelete(list.TASK_ID)}
        className=" cursor-pointer  text-base  opacity-50 text-gray-400 relative right-2 top-3 "
      />
    </div>
  );
};

export default ListsAdder;
