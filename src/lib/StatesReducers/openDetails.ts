import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpenDetailState {
  value: boolean;
}

const initialState: OpenDetailState = {
  value: false,
};

const openDetailReducer = createSlice({
  name: "openDetail",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    }
  },
});

export const { toggle } = openDetailReducer.actions;
export default openDetailReducer.reducer;
