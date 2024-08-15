"use client";
import { ChangeEvent, useEffect, useState } from "react";
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
import { AppDispatch } from "../../lib/store";
import { v4 as uuidv4 } from "uuid";
import { Projects } from "@/UI/Sections/CreateProject/Projects";

const Testproject = () => {
  const projects: Project[] = useSelector(projectState);
  const dispatch: AppDispatch = useDispatch();
  const { user } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    projectName: "",
    description: "",
    members: [],
    category: "",
    user_id: "",
    projectId: uuidv4(),
  });

  useEffect(() => {
    if (user_id) {
      setFormValues((prevValues) => ({
        ...prevValues,
        user_id,
      }));
    }
  }, [user_id]);

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
    setClicked(false);
    dinamicSave();
  };
  const handleClick = (projectId: string, user_id: string | undefined) => {
    const url = `/projects/${user_id}/${projectId}?userID=${user_id}&projectId=${projectId}`;

    router.push(url);
  };

  const dinamicSave = () => {
    dispatch(
      saveProjects({
        user_id: formValues.user_id,
        projectId: formValues.projectId,
        projectName: formValues.projectName,
        description: formValues.description,
        members: formValues.members,
        category: formValues.category,
      })
    );
  };

  useEffect(() => {
    setClicked(false);
  }, [projectState]);

  useEffect(() => {
    dispatch(loadProjects(user_id));
  }, [dispatch, user_id]);

  return (
    <div className="flex flex-wrap">
      {/* <div className="border-[#0079d3] border-b p-4">
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
      </div> */}
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
            <h3 className="text-center font-bold text-lg mt-3">
              Complete your project information
            </h3>
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
          </article>
        </div>
      )}

      {/* <div className="bg-blue-500 flex flex-col text-start rounded-xl shadow-2xl shadow-gray-200/50"> */}
      {projects.map((element: Project) => (
        <Projects key={element.projectId} element={element} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default Testproject;
