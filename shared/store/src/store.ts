import { configureStore } from '@reduxjs/toolkit';
import select, { type SelectInitialState } from './slices/select';
import games, { type GameInitialState } from './slices/games';

export interface Store {
  select: SelectInitialState;
  games: GameInitialState;
}

const store = configureStore<Store>({
  reducer: {
    select,
    games,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
