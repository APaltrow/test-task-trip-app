import { ITrip } from '@types';

export const useLocalStorage = () => {
  const setToLocalStorage = (newTrips: ITrip[]) => {
    localStorage.setItem('tripsStorage', JSON.stringify(newTrips));
  };

  const getFromLocalStorage = (): ITrip[] | null => {
    const storage = localStorage.getItem('tripsStorage');

    if (!storage) return null;

    return JSON.parse(storage);
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
  };
};
