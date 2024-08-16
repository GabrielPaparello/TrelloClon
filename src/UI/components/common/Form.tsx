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
      className="text-black gap-6 p-5  flex flex-col m-3 border-1 border-gray-500 bg-gray-300/40 rounded-xl"
    >
      <div className="relative">
        <input
          required
          className="peer cursor-pointer ring-1 w-full focus:outline-gray-300/90 bg-gray-200/90 ring-gray-300 focus:ring-0  rounded-md pb-2 px-2"
          type="text"
          name="projectName"
          id="projectName"
          onChange={handleChange}
          value={formValues.projectName}
        />
        <label
          className={`absolute top-3 left-2 text-md text-gray-400 duration-200 transform -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-7  cursor-pointer peer-focus:left-1 peer-focus:font-bold peer-focus:bg-gray-200/90 peer-focus:px-1 peer-focus:text-blue-500/50 peer-focus:text-sm`}
          htmlFor="projectName"
        >
          Project Name
        </label>
      </div>
      <div className="relative">
        <input
          required
          className="peer  cursor-pointer ring-1 w-full focus:outline-gray-300/90 bg-gray-200/90 ring-gray-300 focus:ring-0  rounded-md pb-2 px-2"
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          value={formValues.description}
        />

        <label
          htmlFor="description"
          className={`absolute top-3 left-2 text-md text-gray-400 duration-200 transform -translate-y-1/2
      peer-placeholder-shown:top-1/2  cursor-pointer peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-7 peer-focus:left-1  peer-focus:bg-gray-200/90 peer-focus:px-1 peer-focus:text-blue-500/50 peer-focus:text-sm`}
        >
          Description
        </label>
      </div>
      <div className="relative">
        <input
          required
          type="text"
          className="peer  cursor-pointer ring-1 w-full focus:outline-gray-300/90 bg-gray-200/90 ring-gray-300 focus:ring-0  rounded-md pb-2 px-2"
          id="members"
          name="members"
          onChange={handleChange}
          value={formValues.members}
        />
        <label
          htmlFor="members"
          className={`absolute  cursor-pointer top-3 left-2 text-md text-gray-400 duration-200 transform -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-7 peer-focus:left-1  peer-focus:bg-gray-200/90 peer-focus:px-1 peer-focus:text-blue-500/50 peer-focus:text-sm`}
        >
          Add members
        </label>
      </div>

      <div className="relative">
        <input
          required
          type="text"
          className="peer ring-1  cursor-pointer  w-full focus:outline-gray-300/90 bg-gray-200/90 ring-gray-300 focus:ring-0  rounded-md pb-2 px-2"
          name="category"
          id="category"
          onChange={handleChange}
          value={formValues.category}
        />
        <label
          htmlFor="category"
          className={`absolute  cursor-pointer top-3 left-2 text-md text-gray-400 duration-200 transform -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400
      peer-focus:-translate-y-7 peer-focus:left-1  peer-focus:bg-gray-200/90 peer-focus:px-1 peer-focus:text-blue-500/50 peer-focus:text-sm`}
        >
          Pick category
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-400 hover:bg-blue-500 rounded  p-1.5 text-sm font-semibold shadow-sm"
      >
        Submit
      </button>
    </form>
  );
};
