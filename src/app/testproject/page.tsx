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
import { Form } from "@/UI/components/common/Form";
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
    <div className="flex flex-wrap relative ">
      <section className="">
        <button
          className="bg-indigo-100 border-1 font-bold border-gray-600 hover:bg-indigo-200 shadow-sm mx-2 shadow-gray-600/50 p-1 rounded-md text-gray-500/80 hover:text-gray-800"
          onClick={() => setClicked(true)}
        >
          + New Project
        </button>
      </section>

      {clicked && (
        <div className="absolute top-4 z-50  left-[50vw] min-w-[400px] -translate-x-52  bg-white ring-2 ring-black ring-opacity-20 rounded-xl shadow-2xl">
          <span className="absolute top-2 right-2  bg-gray-200/50 rounded-xl shadow-2xl">
            <Close
              className="text-gray-500 z-10 hover:text-black cursor-pointer shadow-lg shadow-gray-200/50 rounded-xl"
              onClick={() => setClicked(!clicked)}
            />
          </span>
          <article>
            <h3 className="text-center font-bold text-lg mt-3">
              Complete your project information
            </h3>
            <Form
              formValues={formValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </article>
        </div>
      )}
      <div className="flex  flex-wrap gap-2">
        {projects.map((element: Project) => (
          <Projects key={element.projectId} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Testproject;
