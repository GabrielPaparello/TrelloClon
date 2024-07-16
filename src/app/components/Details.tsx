// src/components/Details.tsx
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

  // Local state for managing checklist items and their completion status
  const initialChecklist = list.Details?.checklist || [];
  const [checklist, setChecklist] = useState<string[]>(initialChecklist);
  const [completedChecklist, setCompletedChecklist] = useState<boolean[]>(
    list.Details?.completedChecklist || initialChecklist.map(() => false)
  );

  // Ensure completedChecklist state matches the initial checklist
  useEffect(() => {
    setCompletedChecklist(
      list.Details?.completedChecklist || initialChecklist.map(() => false)
    );
  }, [initialChecklist, list.Details?.completedChecklist]);

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
        Details: { ...details, checklist, completedChecklist }, // Include checklist and completedChecklist in Details
      })
    );
    // Close the
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Render your form inputs and checklist here */}
      </form>
    </div>
  );
});
Details.displayName = "Details";
export default Details;
