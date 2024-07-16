import React, { useState } from "react";
import { useAppDispatch } from "../lib/store";
import { Task, modifyTaskfromCard } from "../lib/StatesReducers/createCard";
import { toggle } from "../lib/StatesReducers/openDetails";
import { Close } from "@mui/icons-material";

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
  const initialChecklist = list.Details?.checklist || []; // Ensure checklist exists
  const [checklist, setChecklist] = useState<string[]>(initialChecklist);
  const [completedChecklist, setCompletedChecklist] = useState<boolean[]>(
    initialChecklist.map(() => false)
  );

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
    const newChecklist = [...checklist];
    newChecklist[index] = value;
    setChecklist(newChecklist);
  };

  // Toggle checklist item completion
  const toggleChecklistItem = (index: number) => {
    const newCompletedChecklist = [...completedChecklist];
    newCompletedChecklist[index] = !newCompletedChecklist[index];
    setCompletedChecklist(newCompletedChecklist);
  };

  // Add a new checklist item
  const handleAddChecklistItem = () => {
    setChecklist((prevChecklist) => [...prevChecklist, ""]);
    setCompletedChecklist((prevCompletedChecklist) => [
      ...prevCompletedChecklist,
      false,
    ]);
  };

  // Remove a checklist item
  const handleRemoveChecklistItem = (index: number) => {
    setChecklist((prevChecklist) => {
      const newChecklist = [...prevChecklist];
      newChecklist.splice(index, 1);
      return newChecklist;
    });
    setCompletedChecklist((prevCompletedChecklist) => {
      const newCompletedChecklist = [...prevCompletedChecklist];
      newCompletedChecklist.splice(index, 1);
      return newCompletedChecklist;
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the task's details and checklist
    dispatch(
      modifyTaskfromCard({
        ...list,
        Details: { ...details, checklist }, // Include checklist in Details
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
        Details: { ...details, checklist }, // Include checklist in Details
      })
    );
    // Toggle the details view
    dispatch(toggle());
  };

  return (
    <div className="fixed bg-white border-[#0079d3] border-2 shadow-lg shadow-gray-400 w-[450px]  top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4">
      <form onSubmit={handleSubmit} className="gap-5">
        <h2 className="fira text-[20px] mb-10 text-black">Details</h2>
        <h3 className="fira text-[17px] text-black">Description</h3>
        <input
          className="border-black border bg-gray-200 rounded-lg min-w-[350px] text-black"
          type="text"
          name="description"
          value={details.description}
          onChange={handleChange}
        />
        <h3 className="fira text-[17px] text-black">Due Date</h3>
        <input
          className="border-black border bg-gray-200 rounded-lg min-w-[350px] text-black"
          type="text"
          name="DueDate"
          value={details.DueDate}
          onChange={handleChange}
        />
        <h3 className="fira text-[17px] text-black">Priority</h3>
        <input
          className="border-black border bg-gray-200 rounded-lg min-w-[350px] text-black"
          type="text"
          name="Priority"
          value={details.Priority}
          onChange={handleChange}
        />
        <h3 className="fira text-[17px] text-black">Status</h3>
        <input
          className="border-black border bg-gray-200 rounded-lg min-w-[350px] text-black"
          type="text"
          name="status"
          value={details.status}
          onChange={handleChange}
        />
        <h3>Checklist</h3>
        <div className="flex flex-col items-center">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 gap-5">
              <input
                type="checkbox"
                checked={completedChecklist[index]}
                onChange={() => toggleChecklistItem(index)}
                className="border-gray-300 rounded shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id={`checkbox-${index}`}
              />
              <input
                type="text"
                value={item}
                onChange={(e) => handleChecklistChange(index, e.target.value)}
                className={`border-black border bg-gray-200 rounded-lg min-w-[350px] text-black ${
                  completedChecklist[index] ? "line-through" : ""
                }`}
              />
              <button
                className="text-[#0079d3]"
                type="button"
                onClick={() => handleRemoveChecklistItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          className="text-[#0079d3]"
          type="button"
          onClick={handleAddChecklistItem}
        >
          Add Item
        </button>
        <br />
        <button className="text-[#0079d3]" type="submit">
          Save
        </button>
      </form>
      <Close
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleDetailClick}
      />
    </div>
  );
});

Details.displayName = "Details";

export default Details;
