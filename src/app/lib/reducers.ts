import { combineReducers } from "@reduxjs/toolkit";
import createCard from "./StatesReducers/createCard";
import openDetails from "./StatesReducers/openDetails";




const rootReducer = combineReducers({
  cards: createCard,
  openDetails: openDetails
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;