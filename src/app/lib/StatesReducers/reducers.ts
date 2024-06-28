import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
import ListSlice from "./ListSlice";





const rootReducer = combineReducers({
  project: projectSlice,
  list: ListSlice,
  // Add more slice reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;