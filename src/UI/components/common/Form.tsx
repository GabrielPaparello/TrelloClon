"use client";
import React, { ChangeEvent, useState } from "react";
interface FormValues {
  projectName: string;
  description: string;
  members: never[];
  category: string;
  user_id: string;
  projectId: string;
}

export interface Props {
  formValues: FormValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = ({
  formValues,
  handleChange,
  handleSubmit,
}) => {
  const [style, setStyle] = useState<boolean>(false);

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black gap-2 p-4 flex flex-col m-5 border-1 border-gray-500 bg-gray-300/40 rounded-xl"
    >
      <input
        required
        className="ring-1 relative max-w-[150px] bg-gray-300/40 ring-gray-500 rounded-md "
        type="text"
        name="projectName"
        id="projectName"
        onChange={handleChange}
        value={formValues.projectName}
      />
      <label
        className={`absolute duration-500 text-sm  rounded-md 
         hover:-translate-y-2/4   hover:bg-gray-200/90 hover:px-1 active:bg-red-500
         `}
        htmlFor="projectName"
      >
        Project Name
      </label>
      <label htmlFor="description">Description</label>
      <input
        required
        className="ring-1 ring-gray-500 rounded-md"
        type="text"
        name="description"
        id="description"
        onChange={handleChange}
        value={formValues.description}
      />
      <label htmlFor="members">Add members</label>
      <input
        required
        type="text"
        className="ring-1 ring-gray-500 rounded-md"
        id="members"
        name="members"
        onChange={handleChange}
        value={formValues.members}
      />
      <label htmlFor="category">Pick category</label>
      <input
        required
        type="text"
        className="ring-1 ring-gray-500 rounded-md"
        name="category"
        id="category"
        onChange={handleChange}
        value={formValues.category}
      />
      <button
        type="submit"
        className="text-white bg-blue-400 hover:bg-blue-500 rounded mt-3 p-2"
      >
        Submit
      </button>
    </form>
  );
};
