import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  projectId: string;
  projectName: string;
  description: string;
  members: string;
  category: string;
  cards: Card[];
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
      }>,
    ) => {
      const newProject: Project = {
        projectId: uuidv4(),
        projectName: action.payload.projectName,
        description: action.payload.description,
        members: action.payload.members,
        category: action.payload.category,
        cards: [],
      };
      state.projects.push(newProject);
    },
  },
});

export const { addProject } = createProjectSlice.actions;
export default createProjectSlice.reducer;
