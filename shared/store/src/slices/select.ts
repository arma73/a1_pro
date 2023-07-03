import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export interface SelectInitialState {
  readonly providers: Array<string>;
  readonly currencies: Array<string>;
  readonly selectedProvider: string;
  readonly selectedCurrency: string;
}

const initialState: SelectInitialState = {
  providers: [],
  currencies: [],
  selectedProvider: '',
  selectedCurrency: '',
};

const reducers: SliceCaseReducers<SelectInitialState> = {
  setProvider: (state, action: PayloadAction<string>) => {
    state.selectedProvider = action.payload;
  },
  setCurrency: (state, action: PayloadAction<string>) => {
    state.selectedCurrency = action.payload;
  },
  setCurrencies: (state, action: PayloadAction<Array<string>>) => {
    state.currencies = action.payload;
  },
  setProviders: (state, action: PayloadAction<Array<string>>) => {
    state.providers = action.payload;
  },
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers,
});

export const { setProvider, setCurrency, setCurrencies, setProviders } =
  selectSlice.actions;

export default selectSlice.reducer;
