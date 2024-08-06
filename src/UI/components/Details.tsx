import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../lib/store";
import { Task, modifyTaskfromCard } from "../../lib/StatesReducers/createCard";
import { toggle } from "../../lib/StatesReducers/openDetails";
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

  // Local state for managing checklist items and their completion status
  const initialChecklist = list.Details?.checklist || [];
  const [checklist, setChecklist] = useState<string[]>(initialChecklist);
  const [completedChecklist, setCompletedChecklist] = useState<boolean[]>(
    initialChecklist.map(() => false)
  );

  // Ensure completedChecklist state matches the initial checklist
  useEffect(() => {
    setCompletedChecklist(
      initialChecklist.map((_, index) => completedChecklist[index] || false)
    );
  }, [initialChecklist]);

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
    handleDetailClick();
  };

  // Handle click to close details
  const handleDetailClick = () => {
    // Update the task's details and checklist, including completedChecklist
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
    <div className="fixed bg-white border-[#0079d3] border-2 shadow-lg shadow-gray-400 w-[450px]  top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-black">Details</h2>
          <Close
            className="cursor-pointer text-black"
            onClick={handleDetailClick}
          />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-black">Description</h3>
            <input
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
              type="text"
              name="description"
              value={details.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-black">Due Date</h3>
            <input
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
              type="text"
              name="DueDate"
              value={details.DueDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-black">Priority</h3>
            <input
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
              type="text"
              name="Priority"
              value={details.Priority}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-black">Status</h3>
            <input
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
              type="text"
              name="status"
              value={details.status}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-black">Checklist</h3>
            <div className="space-y-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={completedChecklist[index]}
                    onChange={() => toggleChecklistItem(index)}
                    className="rounded border-gray-300 text-[#0079d3] focus:ring-2 focus:ring-[#0079d3] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleChecklistChange(index, e.target.value)
                    }
                    className={`border border-gray-300 rounded-lg px-3 py-2 w-full text-black ${
                      completedChecklist[index] ? "line-through" : ""
                    }`}
                  />
                  <button
                    className="text-[#0079d3] hover:underline"
                    type="button"
                    onClick={() => handleRemoveChecklistItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="text-[#0079d3] hover:underline"
                type="button"
                onClick={handleAddChecklistItem}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="text-[#0079d3] hover:underline"
            type="button"
            onClick={handleDetailClick}
          >
            Cancel
          </button>
          <button
            className="text-white bg-[#0079d3] hover:bg-blue-600 py-2 px-4 rounded-lg"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
});

Details.displayName = "Details";

export default Details;
