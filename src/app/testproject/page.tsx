"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  addProject,
  loadProjects,
  Project,
  saveProjects,
} from "../../lib/StatesReducers/createProject";
import { useSelector } from "react-redux";
import { projectState } from "../../lib/ReducersSelector/selector";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { loadData } from "../../lib/StatesReducers/createCard";
import { AppDispatch } from "../../lib/store";
import { v4 as uuidv4 } from "uuid";

const Testproject = () => {
  const { user } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);
  // const userID = "string";

  useEffect(() => {
    if (user_id) {
      setFormValues((prevValues) => ({
        ...prevValues,
        user_id,
      }));
    }
  }, [user_id]);

  const [formValues, setFormValues] = useState({
    projectName: "",
    description: "",
    members: [],
    category: "",
    user_id: "",
    projectId: uuidv4(),
  });
  const projectState = useSelector(
    (state: any) => state.createProject.projects
  );
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addProject(formValues));
  };
  const handleClick = (element: Project) => {
    router.push(
      `/projects/${user_id}/${element.projectId}?userID=${element.user_id}&projectId=${element.projectId}`
    );
  };
  // const handleClick = (element: Project) => {
  //   router.push(
  //     `/projects?userID=/${element.userID}&projectId=/${element.projectId}`
  //   );
  // };
  useEffect(() => {
    setClicked(false);
  }, [projectState]);

  useEffect(() => {
    dispatch(loadProjects(user_id));
  }, [dispatch, user_id]);

  return (
    <div className="flex">
      <div className="border-[#0079d3] border-b p-4">
        <button
          className="text-[#004f8c] font-bold rounded px-4 py-1 mr-2"
          onClick={() => dispatch(loadProjects(user_id))}
        >
          Load
        </button>
        <button
          className="text-[#004f8c] font-bold rounded px-4 py-1"
          onClick={() =>
            dispatch(
              saveProjects({
                user_id: formValues.user_id,
                projectId: formValues.projectId,
                projectName: formValues.projectName,
                description: formValues.description,
                members: formValues.members,
                category: formValues.category,
              })
            )
          }
        >
          Save
        </button>
      </div>
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
            <form
              onSubmit={handleSubmit}
              className="text-black gap-2 p-5 flex flex-col"
            >
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
              <button type="submit" className="text-white bg-blue-500">
                Submit
              </button>
            </form>
          </article>
        </div>
      )}

      <div className="bg-blue-500">
        {projectState.map((element: Project) => (
          <button onClick={() => handleClick(element)} key={element.projectId}>
            {element.projectName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testproject;
