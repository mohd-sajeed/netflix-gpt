import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
