import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchGames } from '@standalone/shared/store';
import { useSpinDelay } from 'spin-delay';

import type { NSAPIGame } from '@standalone/shared/interfaces';
import type { Store, AppDispatch } from '@standalone/shared/store';

type LocationState = {
  game: NSAPIGame.GameType;
} | null;

interface RouteParams extends Record<string, string | undefined> {
  id: string;
}

export const useCurrentGame = () => {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { game = null } = (location.state as LocationState) ?? {};
  const { games, loading } = useSelector<Store, Store['games']>(
    (state) => state.games
  );
  const [currentGame, setCurrentGame] = useState<NSAPIGame.GameType | null>(
    game
  );
  const showLoader = useSpinDelay(loading, {
    delay: 400,
    minDuration: 1000,
  });
  const showMessage = useSpinDelay(!currentGame && !loading, {
    delay: 400,
    minDuration: 1000,
  });

  useEffect(() => {
    if (!games || games.length === 0) {
      dispatch(fetchGames());
    } else {
      const foundGame = games.find((game) =>
        game.id.split('/')[1].startsWith(`${id}`)
      );
      setCurrentGame(foundGame || null);
    }
  }, [dispatch, games, id]);

  return { currentGame, showLoader, showMessage };
};
