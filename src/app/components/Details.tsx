import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { useAppDispatch } from "../lib/store";
import { Task, modifyTaskfromCard } from "../lib/StatesReducers/createCard";
import { toggle } from "../lib/StatesReducers/openDetails";

const Details = React.memo(({ list }: { list: Task }) => {
  const dispatch = useAppDispatch();

  // Local state for managing input values
  const [details, setDetails] = useState({
    description: list.Details?.description || "",
    DueDate: list.Details?.DueDate || "",
    Priority: list.Details?.Priority || "",
    status: list.Details?.status || "",
  });

  // Local state for managing checklist items
  const [checklist, setChecklist] = useState<string[]>(list.Checklist || []);

  // Handle input change for details
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle input change for checklist items
  const handleChecklistChange = (index: number, value: string) => {
    setChecklist((prevChecklist) => {
      const newChecklist = [...prevChecklist];
      newChecklist[index] = value;
      return newChecklist;
    });
  };

  // Add a new checklist item
  const handleAddChecklistItem = () => {
    setChecklist((prevChecklist) => [...prevChecklist, ""]);
  };

  // Remove a checklist item
  const handleRemoveChecklistItem = (index: number) => {
    setChecklist((prevChecklist) => {
      const newChecklist = [...prevChecklist];
      newChecklist.splice(index, 1);
      return newChecklist;
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the task's details and checklist
    dispatch(
      modifyTaskfromCard({
        ...list,
        Details: { ...details },
        Checklist: checklist,
      })
    );
    // Close the details view
    dispatch(toggle());
  };

  // Handle click to close details
  const handleDetailClick = () => {
    // Update the task's details and checklist
    dispatch(
      modifyTaskfromCard({
        ...list,
        detailOpen: !list.detailOpen,
        Details: { ...details },
        Checklist: checklist,
      })
    );
    // Toggle the details view
    dispatch(toggle());
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
        <h3>Checklist</h3>
        {checklist.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChecklistChange(index, e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleRemoveChecklistItem(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddChecklistItem}>
          Add Item
        </button>
        <br />
        <button type="submit">Save</button>
      </form>
      <Close
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleDetailClick}
      />
    </div>
  );
});

export default Details;
