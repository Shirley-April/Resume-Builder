import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countAdded(state) {
      return state += 1;
    },
  },
});

export const { countAdded } = counterSlice.actions;

export default counterSlice.reducer;
