import { FC, useEffect } from 'react';

import { getDayOfWeek, getWeatherIcon } from '@helpers';
import {
  fetchWeatherTodayThunk,
  getTripsState,
  getWeatherTodayState,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { Error, Loader } from '@components';

import style from './WeatherWidget.module.scss';

export const WeatherWidget: FC = () => {
  const dispatch = useAppDispatch();
  const { weatherToday, status, error } = useAppSelector(getWeatherTodayState);
  const { activeTrip, trips } = useAppSelector(getTripsState);

  useEffect(() => {
    const { city } = trips.find((trip) => trip.id === activeTrip);
    /** TO DO : remove conditional after  */
    // if (true) return;
    if (!city) return;
    dispatch(fetchWeatherTodayThunk(city));
  }, [activeTrip]);

  if (status === 'pending') return <Loader />;
  if (error) return <Error errorMessage={error} />;

  if (!weatherToday)
    return <Error errorMessage="Could not retrieve the data ..." />;

  const { datetime, icon, temp, city } = weatherToday;

  const dayOfWeek = getDayOfWeek(datetime);
  const iconURL = getWeatherIcon(icon);

  return (
    <div className={style.container}>
      <h3 className={style.title}>{dayOfWeek}</h3>

      <div className={style.temperature_container}>
        <img
          className={style.temperature_icon}
          src={iconURL}
          alt="weather icon"
        />
        <p className={style.temperature}>{Math.floor(temp)}</p>
        <span className={style.city}>{city}</span>
      </div>
    </div>
  );
};
