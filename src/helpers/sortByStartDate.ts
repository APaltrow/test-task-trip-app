import { compareDates } from './compareDates';

export const sortByStartDate = (a, b) => {
  if (compareDates(a.startDate, b.startDate)) {
    return 1;
  }
  if (!compareDates(a.startDate, b.startDate)) {
    return -1;
  }

  return 0;
};
