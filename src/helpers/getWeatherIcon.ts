import { WEATHER_ICONS_SET } from '@constants';

export const getWeatherIcon = (weather: string): string => {
  return WEATHER_ICONS_SET[weather];
};
