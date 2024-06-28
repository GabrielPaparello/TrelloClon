import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "./StatesReducers/projectSlice";
import ListSlice from "./StatesReducers/ListSlice";
import dragableReducer from "./StatesReducers/dragable";




const rootReducer = combineReducers({
  project: projectSlice,
  list: ListSlice,
  drag: dragableReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;