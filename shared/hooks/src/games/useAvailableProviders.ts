import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import type { Store } from '@standalone/shared/store';

/**
 * Get the unique providers from the games list.
 */
export const useAvailableProviders = () => {
  const { games } = useSelector<Store, Store['games']>((state) => state.games);

  const availableProviders = useMemo(() => {
    if (!games || games.length === 0) return [];
    const providersSet = new Set<string>();
    games.forEach(({ provider }) => {
      providersSet.add(provider);
    });
    return Array.from(providersSet);
  }, [games]);

  return availableProviders;
};
