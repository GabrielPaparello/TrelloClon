import { combineReducers } from "@reduxjs/toolkit";
import createCard from "./StatesReducers/createCard";
import openDetails from "./StatesReducers/openDetails";
import toast from "./StatesReducers/toast";
import createProject from "./StatesReducers/createProject";

const rootReducer = combineReducers({
  cards: createCard,
  openDetails: openDetails,
  toastState: toast,
  createProject: createProject,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
