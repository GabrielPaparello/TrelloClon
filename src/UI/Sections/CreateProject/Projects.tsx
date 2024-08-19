import React from "react";
import { Project } from "@/lib/StatesReducers/createProject";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Projects = ({ element }: { element: Project }) => {
  const { user } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const router = useRouter();

  const handleClick = (projectId: string, user_id: string | undefined) => {
    const url = `/projects/${user_id}/${projectId}?userID=${user_id}&projectId=${projectId}`;

    router.push(url);
  };
  return (
    <>
      <div
        key={element.projectId}
        className="p-2 flex flex-col  items-center justify-center text-gray-800/80 bg-gray-200/30 shadow-black shadow-sm  rounded-lg   "
      >
        <div className="flex flex-col gap-3 items-start justify-center p-5 bg-blue-300/30 ring-blue-400/40 ring-1 rounded-lg">
          <h1 className="text-lg font-bold relative text-center  ">
            Project Name :{" "}
            <span className=" bg-blue-200/30 text-blue-500/70 font-light p-1 ring-1 rounded ring-blue-200/80">
              {element.projectName}
            </span>
          </h1>

          <h2 className="relative font-bold text-md     ">
            Description :{" "}
            <span className=" text-start bg-blue-200/30 text-blue-500/70 font-light p-1 ring-1 rounded ring-blue-200/80">
              {element.description}
            </span>
          </h2>

          <h3 className="relative text-md font-bold    ">
            Members :{" "}
            <span className=" bg-blue-200/30 text-blue-500/70 font-light p-1 ring-1 rounded ring-blue-200/80">
              {element.members}
            </span>
          </h3>

          <h3 className="text-md font-bold relative   ">
            Category :{" "}
            <span className=" bg-blue-200/30 text-blue-500/70 font-light p-1 ring-1 rounded ring-blue-200/80">
              {element.category}
            </span>
          </h3>
        </div>
        <button
          className="  text-blue-500/70 font-semibold p-1 w-fit mt-3  ring-1 underline-blue-300/80 underline-offset-2 underline rounded ring-blue-300/80 hover:no-underline hover:bg-blue-300/80 hover:text-blue-600/70"
          onClick={() => handleClick(element.projectId, user_id)}
          key={element.projectId}
        >
          Open Project
        </button>
      </div>
    </>
  );
};
