import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import type { Store } from '@standalone/shared/store';

/**
 * Get the sorted and filtered games based on selected provider and currency.
 */
export const useSortedAndFilteredGames = () => {
  const { games } = useSelector<Store, Store['games']>((state) => state.games);
  const { selectedProvider, selectedCurrency } = useSelector<
    Store,
    Store['select']
  >((state) => state.select);

  const sortedAndFilteredGames = useMemo(() => {
    if (!games || games.length === 0) return [];

    const sortedGamesByPopularityDown = [...games].sort((a, b) => {
      return a.collections.popularity - b.collections.popularity;
    });

    const filteredGames = sortedGamesByPopularityDown.filter((game) => {
      const filterByProvider = game.provider
        .toLowerCase()
        .includes(selectedProvider.toLowerCase());
      let filterByCurrency = true;
      if (selectedCurrency !== '') {
        filterByCurrency = selectedCurrency in game.real;
      }
      return filterByProvider && filterByCurrency;
    });

    return filteredGames;
  }, [games, selectedCurrency, selectedProvider]);

  return sortedAndFilteredGames;
};
