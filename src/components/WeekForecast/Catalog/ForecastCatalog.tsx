import { FC } from 'react';

import rainy from '@assets/images/rainy.png';
import sunny from '@assets/images/sunny.png';
import sunnyCloudy from '@assets/images/sunnyCloudy.png';
import cloudy from '@assets/images/cloudy.png';
import sunnyCloudyRainy from '@assets/images/sunnyCloudyRainy.png';

import style from './ForecastCatalog.module.scss';

import { ForecastCard } from '../Card';

const WEATHER_ICONS_SRC = {
  rainy,
  sunny,
  sunnyCloudy,
  cloudy,
  sunnyCloudyRainy,
};

const FORECAST_WEEK = [
  {
    id: '1',
    weather: 'sunny',
    day: 'Monday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '2',
    weather: 'sunnyCloudy',
    day: 'Tuesday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '3',
    weather: 'cloudy',
    day: 'Wednesday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '4',
    weather: 'sunnyCloudyRainy',
    day: 'Thursday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '5',
    weather: 'rainy',
    day: 'Friday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '6',
    weather: 'sunny',
    day: 'Saturday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
  {
    id: '7',
    weather: 'sunny',
    day: 'Sunday',
    degrees: {
      day: 28,
      night: 22,
    },
  },
];

export const ForecastCatalog: FC = () => {
  const getIconURL = (weather) => {
    return WEATHER_ICONS_SRC[weather];
  };

  return (
    <div className={style.week_forecast}>
      <h3>Week</h3>
      <div className={style.forecast_catalog}>
        {FORECAST_WEEK.map((day) => (
          <ForecastCard
            key={day.id}
            iconURL={getIconURL(day.weather)}
            day={day.day}
            degreesDay={day.degrees.day}
            degreesNight={day.degrees.night}
          />
        ))}
      </div>
    </div>
  );
};
