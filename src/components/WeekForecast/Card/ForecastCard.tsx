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
    <div className={style.container}>
      <h6 className={style.title}>{day}</h6>
      <img
        className={style.icon}
        src={iconURL}
        alt={day}
      />
      <p className={style.text}>
        {`${Math.floor(tempMax)}°/${Math.floor(tempMin)}°`}
      </p>
    </div>
  );
};
