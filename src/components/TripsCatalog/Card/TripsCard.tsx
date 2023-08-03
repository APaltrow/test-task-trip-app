import { FC } from 'react';

import { formatDate } from '@helpers';

import style from './TripsCard.module.scss';

interface TripsCardProps {
  city: string;

  url: string;
  startDate: string;
  endDate: string;
}

export const TripsCard: FC<TripsCardProps> = ({
  city,
  startDate,
  endDate,
  url,
}) => {
  return (
    <div className={style.trips_card}>
      <img
        className={style.trips_image}
        src={url}
        alt={city}
      />
      <h5>{city}</h5>
      <p>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</p>
    </div>
  );
};
