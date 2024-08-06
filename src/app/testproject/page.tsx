"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  addProject,
  loadProjects,
  Project,
} from "../../lib/StatesReducers/createProject";
import { useSelector } from "react-redux";
import { projectState } from "../../lib/ReducersSelector/selector";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { loadData } from "../../lib/StatesReducers/createCard";
import { AppDispatch } from "../../lib/store";

const Testproject = () => {
  const { user } = useUser();
  const userID = user?.sub?.split("|")[1];
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);
  // const userID = "string";

  useEffect(() => {
    if (userID) {
      setFormValues((prevValues) => ({
        ...prevValues,
        userID,
      }));
    }
  }, [userID]);

  const [formValues, setFormValues] = useState({
    projectName: "",
    description: "",
    members: "",
    category: "",
    userID: "",
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
      `/projects/${userID}/${element.projectId}?userID=${element.userID}&projectId=${element.projectId}`
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
    if (userID) {
      dispatch(loadProjects(userID));
    }
  }, [userID, dispatch]);

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
