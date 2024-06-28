import { PayloadAction,  createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface ProjectState {
  PARENT_ID: string;
  editable: boolean;
  value: string;
}
const initialState: ProjectState = {
  PARENT_ID: uuidv4(),
  value: "",
  editable: true,
};

const projectSlice = createSlice({
  name: "projectName",
  initialState,
  reducers: {
    setProjectName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setEditable: (state, action: PayloadAction<boolean>) => {
      state.editable = action.payload;
    }
    },
  },
);

export const { setProjectName, setEditable } = projectSlice.actions;
export default projectSlice.reducer;
