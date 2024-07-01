import { combineReducers } from "@reduxjs/toolkit";
import createCard from "./StatesReducers/createCard";




const rootReducer = combineReducers({
  cards: createCard
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;