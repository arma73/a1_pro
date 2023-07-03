import { useEffect } from 'react';
import { fetchGames } from '@standalone/shared/store';
import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@standalone/shared/store';

/**
 * Fetch games on component mount.
 */
export const useFetchGames = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
};
