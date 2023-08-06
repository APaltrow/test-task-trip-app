import { FC, useEffect } from 'react';

import {
  fetchForecastThunk,
  getForecastState,
  getTripsState,
  useAppDispatch,
  useAppSelector,
} from '@redux';
import { getDayOfWeek, getWeatherIcon } from '@helpers';

import { Error, Loader } from '@components';

import style from './ForecastCatalog.module.scss';

import { ForecastCard } from '../Card';

export const ForecastCatalog: FC = () => {
  const dispatch = useAppDispatch();

  const { forecast, status, error } = useAppSelector(getForecastState);
  const { activeTrip, trips } = useAppSelector(getTripsState);

  useEffect(() => {
    if (true) return;
    /** TO DO : remove conditional after  */
    // if (!activeTrip) return;
    const { city, startDate, endDate } = trips.find(
      (trip) => trip.id === activeTrip,
    );

    dispatch(
      fetchForecastThunk({
        city,
        startDate,
        endDate,
      }),
    );
  }, [activeTrip]);

  if (status === 'pending') return <Loader />;
  if (error) return <Error errorMessage={error} />;

  if (!forecast.length)
    return <Error errorMessage="Could not retrieve the data ..." />;

  return (
    <div className={style.container}>
      <h3 className={style.title}>Week</h3>
      <div className={style.slider}>
        {forecast.map((day) => (
          <ForecastCard
            key={day.id}
            iconURL={getWeatherIcon(day.icon)}
            day={getDayOfWeek(day.datetime)}
            tempMin={day.tempmin}
            tempMax={day.tempmax}
          />
        ))}
      </div>
    </div>
  );
};
