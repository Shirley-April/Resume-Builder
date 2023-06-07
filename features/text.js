import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Initial",
  lastName: "",
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    textAdded(state, action) {
        console.log("payload", action);
        // return state = action.payload
      // return { ...state, firstName: action.payload };
    },
  },
});

export const { textAdded } = textSlice.actions;

export default textSlice.reducer;
