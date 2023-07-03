import {
  GameCards,
  FilterGames,
  ShowMore,
} from '@standalone/shared/components';
import { useFetchGames } from '@standalone/shared/hooks';

const HomePage = () => {
  useFetchGames();

  return (
    <>
      <FilterGames />
      <GameCards />
      <ShowMore />
    </>
  );
};

export default HomePage;
