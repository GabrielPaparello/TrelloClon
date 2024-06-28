import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Task {
  PARENT_ID: string;
  TASK_NAME: string;
  TASK_ID: string;
  editable: boolean;
}

interface ListState {
  tasks: Task[];
}

const initialState: ListState = {
  tasks: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: (state) => {
      const newTask: Task = {
        PARENT_ID: "",
        TASK_NAME: "",
        TASK_ID: uuidv4(),
        editable: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        (task) => task.TASK_ID !== action.payload
      );
    },
    modifyTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.TASK_ID === action.payload.TASK_ID) {
          return action.payload;
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, modifyTask } = listSlice.actions;
export default listSlice.reducer;
