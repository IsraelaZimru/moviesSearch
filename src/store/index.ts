import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../data/types";

const initialState: {
  movies: TMovie[];
} = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

const store = configureStore({
  reducer: movieSlice.reducer,
});

export const movieActions = movieSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
