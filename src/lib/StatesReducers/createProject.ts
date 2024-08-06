import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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
  user_id: string;
  projectId: string;
  projectName: string;
  description: string;
  members: string[];
  category: string;
}
interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

// Define the response type based on your API response
interface LoadProjectsResponse {
  projects: Project[];
}

// Async thunk to load projects
export const loadProjects = createAsyncThunk<Project[], string | undefined>(
  "projects/loadProjects",
  async (user_id, thunkAPI) => {
    try {
      const response = await fetch("/api/projectLoad", {
        method: "GET",
        headers: {
          user_id: user_id || "",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to load projects");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading projects:", error);
      return thunkAPI.rejectWithValue([]);
    }
  }
);

export const saveProjects = createAsyncThunk(
  "projects/saveProjects",
  async ({
    user_id,
    projectId,
    projectName,
    description,
    members,
    category,
  }: {
    projectId: string;
    user_id: string | undefined;
    projectName: string;
    description: string;
    members: string[];
    category: string;
  }) => {
    const response = await fetch("/api/projectSave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        projectId,
        projectName,
        description,
        members,
        category,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to save data");
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
        members: string[];
        category: string;
        user_id: string;
        projectId: string;
      }>
    ) => {
      const newProject: Project = {
        user_id: action.payload.user_id,
        projectId: action.payload.projectId,
        projectName: action.payload.projectName,
        description: action.payload.description,
        members: action.payload.members,
        category: action.payload.category,
      };
      state.projects.push(newProject);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export const { addProject } = createProjectSlice.actions;
export default createProjectSlice.reducer;
