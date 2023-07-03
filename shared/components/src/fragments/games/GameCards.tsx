import { useSelector } from 'react-redux';
import { Store } from '@standalone/shared/store';
import { useSortedAndFilteredGames } from '@standalone/shared/hooks';
import { Box } from '@standalone/shared/ui';
import CardListContainer from './CardListContainer';
import GameCard from './GameCard';

const GameCards = () => {
  const { selectedCurrency } = useSelector<Store, Store['select']>(
    (state) => state.select
  );
  const { loading, offset } = useSelector<Store, Store['games']>(
    (state) => state.games
  );
  const sortedAndFilteredGames = useSortedAndFilteredGames();

  if (!loading && sortedAndFilteredGames?.length === 0) {
    return (
      <Box direction="center" margin="md">
        <span>Not Found</span>
      </Box>
    );
  }

  return (
    <CardListContainer>
      {sortedAndFilteredGames &&
        sortedAndFilteredGames.length > 0 &&
        sortedAndFilteredGames.slice(0, offset).map((game) => {
          const {
            id,
            title,
            provider,
            collections: { popularity },
            real,
          } = game;

          return (
            <GameCard
              key={id}
              game={game}
              id={id}
              title={title}
              popularity={popularity}
              selectedCurrency={selectedCurrency}
              provider={provider}
              currencies={Array.from(Object.keys(real))}
            />
          );
        })}
    </CardListContainer>
  );
};

export default GameCards;
