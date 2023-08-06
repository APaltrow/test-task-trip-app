import { FC } from 'react';

import { getTripsState, useAppSelector } from '@redux';

import { TIME_CLOCK } from '@constants';
import { useCountDown } from '@hooks';

import style from './CountDownTimer.module.scss';

export const CountDownTimer: FC = () => {
  const { activeTrip, trips } = useAppSelector(getTripsState);
  const date = trips.find((trip) => trip.id === activeTrip).startDate;

  const countdown = useCountDown(`${date} 00:00:00`);

  return (
    <section className={style.container}>
      {TIME_CLOCK.map((timeItem) => {
        const timeProp = countdown[timeItem];
        return (
          <div
            className={style.item}
            key={timeItem}
          >
            <p className={style.number}>
              {timeProp < 10 ? `0${timeProp}` : timeProp}
            </p>
            <h5 className={style.title}>{timeItem}</h5>
          </div>
        );
      })}
    </section>
  );
};
