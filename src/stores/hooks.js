/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { StoreContext } from './StoreProvider';

export function useWeatherStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) throw new Error('error');

  return rootStore.weatherStore;
}
