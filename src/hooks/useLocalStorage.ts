import { TripsState } from '@redux';
import { LOCALSTORAGE_KEY } from '@constants';

type Storage = Omit<TripsState, 'filteredTrips'>;

export const useLocalStorage = () => {
  const getFromLocalStorage = (): Storage | null => {
    const storageJSON = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!storageJSON) return null;

    const storageData: Storage = JSON.parse(storageJSON);

    return storageData;
  };

  const setToLocalStorage = (newStorage: Storage) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newStorage));
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
  };
};
