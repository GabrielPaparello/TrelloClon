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
        className="p-5 flex flex-col text-white bg-blue-500 gap-5  "
      >
        <h2 className="text-xl font-bold relative bg-gray-600/30 rounded-lg p-2">
          Project Name :{" "}
          <span className="font-bold">{element.projectName}</span>
        </h2>

        <h3 className="relative font-bold text-xl   bg-gray-600/30 rounded-lg p-2">
          Description : <span className="font-bold">{element.description}</span>
        </h3>

        <h3 className="relative text-xl font-bold  bg-gray-600/30 rounded-lg p-2">
          Members : <span className="font-bold">{element.members}</span>
        </h3>

        <h3 className="text-xl font-bold relative bg-gray-600/30 rounded-lg p-2">
          Category : <span className="font-bold">{element.category}</span>
        </h3>
        <button
          className="text-black"
          onClick={() => handleClick(element.projectId, user_id)}
          key={element.projectId}
        >
          Open Project
        </button>
      </div>
    </>
  );
};
