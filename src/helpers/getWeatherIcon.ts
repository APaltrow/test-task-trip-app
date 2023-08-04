import { ICONS_SET } from '@constants';

export const getWeatherIcon = (weather: string): string => {
  return ICONS_SET[weather];
};
