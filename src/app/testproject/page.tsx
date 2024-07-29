"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProject } from "../lib/StatesReducers/createProject";
const Testproject = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    projectName: "",
    description: "",
    members: "",
    category: "",
  });

  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addProject(formValues));
  };
  return (
    <div className="flex">
      <section className="text-black text-2xl p-5">
        <h1>Create a project</h1>
        <button onClick={() => setClicked(true)}>+ New Project</button>
      </section>

      {clicked && (
        <div className="absolute top-[100px]  left-[50vw] min-w-[400px] -translate-x-52  bg-white ring-2 ring-black ring-opacity-20 rounded-xl shadow-2xl">
          <span className="absolute top-2 right-2  bg-gray-200/50 rounded-xl shadow-2xl">
            <Close
              className="text-gray-400 z-10 hover:text-black   "
              onClick={() => setClicked(!clicked)}
            />
          </span>
          <article>
            <form className="text-black gap-2 p-5 flex flex-col">
              <label htmlFor="projectName">Project Name</label>
              <input
                required
                className="ring-2 ring-black "
                type="text"
                name="projectName"
                id="projectName"
                onChange={handleChange}
                value={formValues.projectName}
              />
              <label htmlFor="description">Description</label>
              <input
                required
                className="ring-2 ring-black"
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
                className="ring-2 ring-black"
                id="members"
                name="members"
                onChange={handleChange}
                value={formValues.members}
              />
              <label htmlFor="category">Pick categorie</label>
              <input
                required
                type="text"
                className="ring-2 ring-black"
                name="category"
                id="category"
                onChange={handleChange}
                value={formValues.category}
              />
              <button onClick={handleSubmit} className="text-white bg-blue-500">
                Submit
              </button>
            </form>
          </article>
        </div>
      )}
    </div>
  );
};

export default Testproject;
