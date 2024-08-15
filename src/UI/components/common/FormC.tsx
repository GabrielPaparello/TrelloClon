import React, { ChangeEvent } from "react";

interface FormValues {
  projectName: string;
  description: string;
  members: never[];
  category: string;
  user_id: string;
  projectId: string;
}

interface Props {
  formValues: FormValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = ({
  formValues,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-black gap-2 p-5 flex flex-col"
    >
      <label htmlFor="projectName">Project Name</label>
      <input
        required
        className="ring-1 ring-gray-500 rounded-md "
        type="text"
        name="projectName"
        id="projectName"
        onChange={handleChange}
        value={formValues.projectName}
      />
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
