import { FC } from 'react';

import style from './TripsCard.module.scss';

interface TripsCardProps {
  city: string;
  date: string;
  url: string;
}

export const TripsCard: FC<TripsCardProps> = ({ city, date, url }) => {
  return (
    <div className={style.trips_card}>
      <img
        className={style.trips_image}
        src={url}
        alt={city}
      />
      <h5>{city}</h5>
      <p>{date}</p>
    </div>
  );
};
