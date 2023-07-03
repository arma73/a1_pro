import { Breadcrumb } from '@standalone/shared/components';
import { Box } from '@standalone/shared/ui';
import { useCurrentGame } from '@standalone/shared/hooks';

const GamePage = () => {
  const { currentGame, showLoader, showMessage } = useCurrentGame();

  return (
    <>
      <Breadcrumb title={currentGame && currentGame.id.replace('/', ' | ')} />
      <Box direction="center">
        {currentGame ? (
          <h1>{currentGame.title}</h1>
        ) : (
          <>
            <div>{showLoader && 'Loading...'}</div>
            <div>{showMessage && 'Not found'}</div>
          </>
        )}
      </Box>
    </>
  );
};

export default GamePage;
