import { DAYS_OF_WEEK } from '@constants';

export const getDayOfWeek = (date: string): string => {
  const dayNumber = new Date(date).getDay();

  return DAYS_OF_WEEK[dayNumber - 1];
};
