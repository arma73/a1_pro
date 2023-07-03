import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import type { Store } from '@standalone/shared/store';

/**
 * Get the unique currencies from the games list.
 */
export const useAvailableCurrencies = () => {
  const { games } = useSelector<Store, Store['games']>((state) => state.games);

  const availableCurrencies = useMemo(() => {
    if (!games || games.length === 0) return [];
    const currencySet = new Set<string>();
    games.forEach(({ real }) => {
      for (const currency in real) {
        currencySet.add(currency);
      }
    });
    return Array.from(currencySet);
  }, [games]);

  return availableCurrencies;
};
