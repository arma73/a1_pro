import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { NSAPIGame, NSDynamic } from '@standalone/shared/interfaces';

export interface GameInitialState {
  readonly games: Array<NSAPIGame.GameType> | null;
  readonly loading: boolean;
  readonly error: string;
  readonly offset: number;
}

const initialState: GameInitialState = {
  games: null,
  loading: false,
  error: '',
  offset: 12,
};

function load(): Promise<NSDynamic.ImportType<Array<NSAPIGame.GameType>>> {
  return import('../mock.json') as unknown as Promise<
    NSDynamic.ImportType<Array<NSAPIGame.GameType>>
  >;
}

export const fetchGames = createAsyncThunk('games/fetchAll', async () => {
  const allGames = await load();
  return allGames.default;
});

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addOffset: (state) => {
      state.offset += 12;
    },
    resetOffset: (state) => {
      state.offset = 12;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.loading = false;
      state.games = action.payload;
      state.error = '';
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.loading = false;
      state.games = [];
      state.error = action.error.message ?? '';
    });
  },
});

export const { addOffset, resetOffset } = gamesSlice.actions;

export default gamesSlice.reducer;
