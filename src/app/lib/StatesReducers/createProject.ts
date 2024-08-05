import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Card {
  PARENT_ID: string;
  editable: boolean;
  CARD_NAME: string;
  tasks?: Task[];
}

export interface Task {
  TASK_ID: string;
  TASK_NAME: string;
  PARENT_ID: string;
  editable: boolean;
  detailOpen: boolean;
  Details: {
    description: string;
    DueDate: string;
    Priority: string;
    status: string;
    checklist?: string[];
  };
}
export interface Project {
  userID: string;
  projectId: string;
  projectName: string;
  description: string;
  members: string;
  category: string;
}
interface ProjectState {
  projects: Project[];
}
// interface ProjectState {
//   cards: Card[];
// }

// const initialState: ProjectState = {
//   cards: [],
// };
const initialState: ProjectState = {
  projects: [],
};
interface LoadDataResponse {
  projects: Project[];
}
export const loadData = createAsyncThunk(
  "app/loadData",
  async ({
    user_id,
    projectId,
  }: {
    user_id: string | undefined;
    projectId: string;
  }) => {
    try {
      const response = await fetch("/api/load", {
        method: "GET",
        headers: {
          user_id: user_id || "",
          projectId: projectId || "",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to load data");
      }
      const data: LoadDataResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading data:", error);
      return { projects: [] }; // Default to empty array on error
    }
  }
);

const createProjectSlice = createSlice({
  name: "createProject",
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{
        projectName: string;
        description: string;
        members: string;
        category: string;
        userID: string;
      }>
    ) => {
      const newProject: Project = {
        userID: action.payload.userID,
        projectId: uuidv4(),
        projectName: action.payload.projectName,
        description: action.payload.description,
        members: action.payload.members,
        category: action.payload.category,
      };
      state.projects.push(newProject);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.projects = action.payload.projects;
    });
  },
});

export const { addProject } = createProjectSlice.actions;
export default createProjectSlice.reducer;
