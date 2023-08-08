import axios from 'axios';

import { API_KEY, BASE_URL } from '@constants';

export const fetchWeatherToday = async (city: string) => {
  const WEATHER_TODAY_URL = `${BASE_URL}/%5b${city}%5d/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

  const { data } = await axios.get(WEATHER_TODAY_URL);
  const { temp, icon, datetime } = data.days[0];

  return {
    city,
    temp,
    icon,
    datetime,
  };
};
