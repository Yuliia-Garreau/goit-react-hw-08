import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "@reduxjs/toolkit";

// const initialState = {
//   filters: {
//     name: "a",
//   },
// };
const initialState = {
  name: "",
};
const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, actions) {
      state.name = actions.payload;
      // console.log(state.filters.name());
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
export const selectNameFilter = (state) => state.filters.name;
