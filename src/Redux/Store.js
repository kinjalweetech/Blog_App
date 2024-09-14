// src/Redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import mockApiReducer from './ApiSlice'; // Ensure this path is correct
import postReducer from './ApiSlice'
const store = configureStore({
  reducer: {
    // mockApi: mockApiReducer,
    posts:postReducer,
  },
  
});

export default store;
