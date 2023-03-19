import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (_, action) => {
      return action.payload;
    },
  },
});
export const { filterChange } = filterSlice.actions;
export const filtersReducers = filterSlice.reducer;
