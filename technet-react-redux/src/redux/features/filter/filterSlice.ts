import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  status: boolean;
  priceRange: number;
}

const initialState: IFilter = {
  status: false,
  priceRange: 150,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
