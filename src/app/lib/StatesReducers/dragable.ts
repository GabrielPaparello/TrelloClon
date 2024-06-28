import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface dragableState {
    currentX: number;
    currentY: number;
    newX: number;
    newY: number;
    positionX: number;
    positionY: number;
}
const initialState: dragableState = {
  currentX: 0,
  currentY: 0,
  newX: 0,
    newY: 0,
    positionX: 0,
  positionY: 0,
};


const dragableReducer = createSlice({
  name: "dragable",
  initialState,
   reducers: {
    dragOn: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.currentX = action.payload.x;
      state.currentY = action.payload.y;
    },
    dragOff: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.newX = action.payload.x;
      state.newY = action.payload.y;
       },
       setPosition: (state) => {
        state.positionX = state.newX;
        state.positionY = state.newY;
    },
  },
});

export const {dragOn , dragOff, setPosition} = dragableReducer.actions;
export default dragableReducer.reducer;
