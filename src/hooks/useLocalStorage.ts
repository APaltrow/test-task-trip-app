import { LOCALSTORAGE_KEY } from '@constants';
import { ITrip } from '@types';

export const useLocalStorage = () => {
  const setToLocalStorage = (newTrips: ITrip[]) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTrips));
  };

  const getFromLocalStorage = (): ITrip[] | null => {
    const storage = localStorage.getItem(LOCALSTORAGE_KEY);

    if (!storage) return null;

    return JSON.parse(storage);
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
  };
};
