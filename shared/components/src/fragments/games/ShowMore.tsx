import { useSelector } from 'react-redux';
import {
  useSortedAndFilteredGames,
  useProviderHandler,
} from '@standalone/shared/hooks';
import { Box, PrimaryButton } from '@standalone/shared/ui';

import type { Store } from '@standalone/shared/store';

const ShowMore = () => {
  const { offset } = useSelector<Store, Store['games']>((state) => state.games);
  const sortedAndFilteredGames = useSortedAndFilteredGames();
  const { addOffsetHandler } = useProviderHandler();

  if (
    !(sortedAndFilteredGames && !(offset >= sortedAndFilteredGames?.length))
  ) {
    return null;
  }

  return (
    <Box direction="center" bg="primary">
      <PrimaryButton onClick={addOffsetHandler}>
        <span>Show more</span>
      </PrimaryButton>
    </Box>
  );
};

export default ShowMore;
