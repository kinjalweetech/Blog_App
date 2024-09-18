import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data from API
export const fetchMockApiData = createAsyncThunk(
  "mockApi/fetchData",
  async (page = 1) => {
    const response = await axios.get(
      `https://66d7f3d137b1cadd8052c5c1.mockapi.io/https/mock?page=${page}&limit=12`
    );
    console.log("author", response.data);
    return response.data;
  }
);

// Slice for mock API
const mockApiSlice = createSlice({
  name: "mockApi",
  initialState: {
    loading: false,
    data: [],
    detail: {},
    error: null,
    currentPage: 1,
  },
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMockApiData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMockApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMockApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setDetail, setPage, setPost } = mockApiSlice.actions;

export default mockApiSlice.reducer;
