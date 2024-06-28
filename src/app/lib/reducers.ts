import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "./StatesReducers/projectSlice";
import ListSlice from "./StatesReducers/ListSlice";
import dragableReducer from "./StatesReducers/dragable";
import createCard from "./StatesReducers/createCard";




const rootReducer = combineReducers({
  project: projectSlice,
  list: ListSlice,
  drag: dragableReducer,
  cards: createCard
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;