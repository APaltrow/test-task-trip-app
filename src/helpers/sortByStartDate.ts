import { ITrip } from '@types';

import { compareDates } from './compareDates';

type SortByStartDateType = (
  first: ITrip,
  second: ITrip,
  order: 'asc' | 'desc',
) => 0 | 1 | -1;

export const sortByStartDate: SortByStartDateType = (first, second, order) => {
  /* If dates are the same, no need to sort those, early return */
  if (first.startDate === second.startDate) return 0;

  /* Checking if order is ASCENDING aka 'asc' */
  const isFirstDateBigger = compareDates(first.startDate, second.startDate);

  /* if not -  reverting the value to revert the sort order */
  const isASCOrder = order === 'asc' ? isFirstDateBigger : !isFirstDateBigger;

  return isASCOrder ? 1 : -1;
};
