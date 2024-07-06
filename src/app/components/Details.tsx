import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { useAppDispatch } from "../lib/store";
import {
  Task,
  modifyTaskfromCard,
} from "../lib/StatesReducers/createCard";
import { toggle } from "../lib/StatesReducers/openDetails";

const Details = ({ list }: { list: Task }) => {
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState({
    description: list.Details?.description || "",
    DueDate: list.Details?.DueDate || "",
    Priority: list.Details?.Priority || "",
    status: list.Details?.status || "",
  });

  const handleDetailClick = () => {
    dispatch(modifyTaskfromCard({ ...list, detailOpen: !list.detailOpen }));
    dispatch(toggle());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      dispatch(modifyTaskfromCard({ ...list, Details: { ...details } }));
      handleDetailClick()
  };

  return (
    <div className="fixed bg-white top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4">
      <form onSubmit={handleSubmit}>
        <h2>Details</h2>
        <h3>Description</h3>
        <input
          type="text"
          name="description"
          value={details.description}
          onChange={handleChange}
        />
        <h3>Due Date</h3>
        <input
          type="text"
          name="DueDate"
          value={details.DueDate}
          onChange={handleChange}
        />
        <h3>Priority</h3>
        <input
          type="text"
          name="Priority"
          value={details.Priority}
          onChange={handleChange}
        />
        <h3>Status</h3>
        <input
          type="text"
          name="status"
          value={details.status}
          onChange={handleChange}
        />
        <button  type="submit">Save</button>
      </form>
      <Close
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleDetailClick}
      />
    </div>
  );
};

export default Details;
