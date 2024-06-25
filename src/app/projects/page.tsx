import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <main>
      <div>
        <h1>Create Project</h1>
        <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="projects/create-project">Start Project</Link>
        </button>
      </div>
    </main>
  );
};

export default Project;
