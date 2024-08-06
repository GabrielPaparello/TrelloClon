import { RootState } from "../reducers";

export const cardEdit = (state: RootState) => state.cards.cards;
export const openDetail = (state: RootState) => state.openDetails.value;
export const toast = (state: RootState) => state.toastState.toast;
export const projectState = (state: RootState) => state.createProject.projects;
