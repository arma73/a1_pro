import { useDispatch } from 'react-redux';
import {
  setProvider,
  setCurrency,
  addOffset,
  resetOffset,
} from '@standalone/shared/store';

import type { AppDispatch } from '@standalone/shared/store';

export const useProviderHandler = () => {
  const dispatch = useDispatch<AppDispatch>();

  const addOffsetHandler = () => dispatch(addOffset());

  const setProviderHandler = (value: string) => {
    dispatch(resetOffset());
    dispatch(setProvider(value));
  };

  const setCurrencyHandler = (value: string) => {
    dispatch(resetOffset());
    dispatch(setCurrency(value));
  };

  return {
    addOffsetHandler,
    setProviderHandler,
    setCurrencyHandler,
  };
};
