"use client";
import React from "react";
const Createproject = () => {
  const [data, setData] = React.useState({
    project_name: "",
    project_description: "",
    project_type: "",
    project_status: "",
    project_priority: "",
    project_team: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Extract data from the form state
    const {
      project_name,
      project_description,
      project_type,
      project_status,
      project_priority,
      project_team,
    } = data;
    (e.currentTarget as HTMLFormElement).reset();

    try {
      // Send a POST request to the API route (`/api/route`) with the project data
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_name,
          project_description,
          project_type,
          project_status,
          project_priority,
          project_team,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const result = await response.json();
      console.log("Project created successfully", result);
      // Optionally, clear the form or display a success message
      setData({
        project_name: "",
        project_description: "",
        project_type: "",
        project_status: "",
        project_priority: "",
        project_team: "",
      });
    } catch (error) {
      console.error("Error creating project:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  
  };

  return (
    <main>
      <div className="shadow-2xl w-fit p-3 border border-[#ccc]">
        <form onSubmit={handleSubmit} className="w-[300px] flex flex-col">
          <h1 className="text-2xl text-center">
            {data.project_name ? data.project_name : "Project"}
          </h1>
          {Object.entries(data).map(([key, value]) =>
            key === "project_description" ? (
              <>
                <h3
                  key={key + "project_description"}
                  className="text-sm text-gray-500"
                >
                  Description
                </h3>
                <textarea
                  key={key}
                  className="border resize-none border-[#ccc] rounded-md p-2 mb-4  w-[100%] "
                  required
                  name={key}
                  placeholder={key}
                  onChange={(event) =>
                    setData({ ...data, [key]: event.currentTarget.value })
                  }
                />
              </>
            ) : (
              <>
                <h3 key={key + "texty"} className="text-sm text-gray-500">
                  {key.replace(/project_/g, " ")}
                </h3>
                <input
                  key={key}
                  required
                  className="border border-[#ccc] rounded-md p-2 mb-4 w-[100%] "
                  type="text"
                  name={key}
                  placeholder={key}
                  onChange={(event) =>
                    setData({ ...data, [key]: event.currentTarget.value })
                  }
                />
              </>
            )
          )}
          <input
            key={"submit"}
            type="submit"
            className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
    </main>
  );
};

export default Createproject;
