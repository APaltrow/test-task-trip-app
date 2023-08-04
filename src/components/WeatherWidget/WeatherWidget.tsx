import { FC, useEffect } from 'react';

import { getDayOfWeek, getWeatherIcon } from '@helpers';
import {
  fetchWeatherTodayThunk,
  getWeatherTodayState,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import style from './WeatherWidget.module.scss';

export const WeatherWidget: FC = () => {
  const dispatch = useAppDispatch();
  const { weatherToday, status, error } = useAppSelector(getWeatherTodayState);

  useEffect(() => {
    dispatch(fetchWeatherTodayThunk('Berlin'));
  }, []);

  if (status === 'pending') return <span>Loading ...</span>;
  if (error) return <span>ERROR</span>;

  if (!weatherToday) return null;

  const { datetime, icon, temp, city } = weatherToday;

  const dayOfWeek = getDayOfWeek(datetime);
  const iconURL = getWeatherIcon(icon);

  return (
    <div className={style.widget}>
      <h3>{dayOfWeek}</h3>

      <div className={style.widget_temperature}>
        <img
          className={style.widget_img}
          src={iconURL}
          alt="weather icon"
        />
        <p>
          {Math.floor(temp)}
          <sup>°C</sup>
        </p>
        <span>{city}</span>
      </div>
    </div>
  );
};
