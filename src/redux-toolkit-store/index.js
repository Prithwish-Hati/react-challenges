import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
        console.log(state, action)
    },
    decrement: (state, action) => {},
    addition: (state, action) => {},
    substraction: (state, action) => {},
  },
});

export const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
