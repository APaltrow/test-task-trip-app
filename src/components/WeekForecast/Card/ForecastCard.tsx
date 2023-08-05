import { FC } from 'react';

import style from './ForecastCard.module.scss';

interface ForecastCardProps {
  iconURL: string;
  day: string;
  tempMin: number;
  tempMax: number;
}

export const ForecastCard: FC<ForecastCardProps> = ({
  iconURL,
  day,
  tempMin,
  tempMax,
}) => {
  return (
    <div className={style.forecast_card}>
      <h6>{day}</h6>
      <img
        className={style.card_img}
        src={iconURL}
        alt={day}
      />
      <p>{`${Math.floor(tempMax)}°/${Math.floor(tempMin)}°`}</p>
    </div>
  );
};
