import { useSelector } from 'react-redux';
import { Box } from '@standalone/shared/ui';
import {
  useAvailableProviders,
  useAvailableCurrencies,
  useProviderHandler,
} from '@standalone/shared/hooks';
import ConfigurableSelect from './ConfigurableSelect';

import type { Store } from '@standalone/shared/store';

const FilterGames = () => {
  const { selectedProvider, selectedCurrency } = useSelector<
    Store,
    Store['select']
  >((state) => state.select);
  const availableProviders = useAvailableProviders();
  const availableCurrencies = useAvailableCurrencies();
  const { setCurrencyHandler, setProviderHandler } = useProviderHandler();

  return (
    <Box flex="row" bg="primary" margin="md">
      <ConfigurableSelect
        extraOptions={[
          {
            name: 'All providers',
            value: '',
          },
        ]}
        availableOptions={availableProviders ?? []}
        selectedOption={selectedProvider}
        onValueChange={setProviderHandler}
      />
      <ConfigurableSelect
        extraOptions={[
          {
            name: 'All currencies',
            value: '',
          },
        ]}
        availableOptions={availableCurrencies ?? []}
        selectedOption={selectedCurrency}
        onValueChange={setCurrencyHandler}
      />
    </Box>
  );
};

export default FilterGames;
