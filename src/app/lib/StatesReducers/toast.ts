import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  toast: boolean;
}

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toast: false,
  } as ToastState,
  reducers: {
    setToast: (state, action: PayloadAction<boolean>) => {
      state.toast = action.payload;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
