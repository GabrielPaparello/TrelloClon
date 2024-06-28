import { RootState } from "../StatesReducers/reducers";

export const selectProjectValue = (state: RootState) => state.project.value;
export const setList = (state: RootState) => state.list
export const task = (state: RootState) => state.list.tasks
export const setEdit = (state: RootState) => state.project.editable