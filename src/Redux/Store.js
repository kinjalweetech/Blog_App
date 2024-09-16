// src/Redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import mockApiReducer from "./ApiSlice"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    mockApi: mockApiReducer,
  },
});

export default store;
