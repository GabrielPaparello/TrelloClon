import { RootState } from "../reducers";

export const selectProjectValue = (state: RootState) => state.project.value;
export const setList = (state: RootState) => state.list
export const task = (state: RootState) => state.list.tasks
export const setEdit = (state: RootState) => state.project.editable
export const dragValue = (state: RootState) => state.drag
// export const  positionX  = (state: RootState) => state.drag;
// export const   positionY  = (state: RootState) => state.drag;