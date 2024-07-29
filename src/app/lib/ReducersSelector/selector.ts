import { RootState } from "../reducers";

// export const selectProjectValue = (state: RootState) => state.project.value;
// export const setList = (state: RootState) => state.list
// export const task = (state: RootState) => state.list.tasks
// export const setEdit = (state: RootState) => state.project.editable
export const cardEdit = (state: RootState) => state.cards.cards;
export const openDetail = (state: RootState) => state.openDetails.value;
export const toast = (state: RootState) => state.toastState.toast;
export const projectState = (state: RootState) => state.createProject.projects;
