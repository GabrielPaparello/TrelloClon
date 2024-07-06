import { Close } from "@mui/icons-material";
import React from "react";
import { useAppDispatch } from "../lib/store";
import {
  Task,
  modifyTaskfromCard,
  
} from "../lib/StatesReducers/createCard";
import { toggle } from "../lib/StatesReducers/openDetails";

const Details = ({ list }: { list: any }) => {
  const dispatch = useAppDispatch();

  const handleDetailClick = ({ list }: { list: Task }) => {
    dispatch(modifyTaskfromCard({ ...list, detailOpen: !list.detailOpen }));
    dispatch(toggle());
    };
    
    const handleChangeDetails = (e:any) => {
        dispatch(modifyTaskfromCard({ ...list, Details:{...list.Details, description: e.target.value } }))
    }

  return (
    <div className="fixed bg-white  top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4">
      
        <h2>Details</h2>
        <h3>Description</h3>
        <input
          onKeyDown={(e) => e.key === "Enter" && handleChangeDetails(e)}
          
              type="text"
              value={list.Details?.description}
        />
        <h3>Due Date</h3>
        <input
          type="text"
          onChange={(e) =>
            dispatch(modifyTaskfromCard({ ...list, Details:{...list.Details, DueDate: e.target.value } }))
          }
              value={list.Details?.DueDate}
        />
        <h3>Priority</h3>
        <input
          type="text"
          onChange={(e) =>
           dispatch(modifyTaskfromCard({ ...list, Details:{...list.Details, Priority: e.target.value } }))
          }
              value={list.Details?.Priority}
        />
        <h3>Status</h3>
        <input
          type="text"
          onChange={(e) =>
            dispatch(modifyTaskfromCard({ ...list, Details:{...list.Details, status: e.target.value } }))
          }
              value={list.Details?.status}
        />
      
      <Close
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => handleDetailClick({ list })}
      />
    </div>
  );
};

export default Details;
