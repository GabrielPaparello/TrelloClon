import { combineReducers } from "@reduxjs/toolkit";
import createCard from "./StatesReducers/createCard";
import openDetails from "./StatesReducers/openDetails";
import toast from "./StatesReducers/toast";

const rootReducer = combineReducers({
  cards: createCard,
  openDetails: openDetails,
  toastState: toast,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
