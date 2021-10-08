import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filtration',
  initialState: {
    search: '',
  },
  reducers: {
    filterContacts: (state, { payload }) => ({
      search: payload,
    }),
  },
});

export const { filterContacts } = slice.actions;

export const selectFilter = state => state.filtration.search;

export default slice.reducer;
