import axios from 'axios';

import { API_KEY } from '@constants';
import { ForecastParams } from '@types';

export const fetchForecast = async (params: ForecastParams) => {
  const { city, startDate, endDate } = params;

  const FORECAST_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?key=${API_KEY}`;
  const { data } = await axios.get(FORECAST_URL);

  return data.days.map((day) => {
    const { datetimeEpoch, datetime, tempmax, tempmin, icon } = day;

    return {
      id: datetimeEpoch,
      datetime,
      tempmax,
      tempmin,
      icon,
    };
  });
};
