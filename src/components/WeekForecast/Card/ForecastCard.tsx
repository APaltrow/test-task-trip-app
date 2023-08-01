import { FC } from 'react';

import style from './ForecastCard.module.scss';

interface ForecastCardProps {
  iconURL: string;
  day: string;
  degreesDay: number;
  degreesNight: number;
}

export const ForecastCard: FC<ForecastCardProps> = ({
  iconURL,
  day,
  degreesDay,
  degreesNight,
}) => {
  return (
    <div className={style.forecast_card}>
      <h6>{day}</h6>
      <img
        className={style.card_img}
        src={iconURL}
        alt="asdss"
      />
      <p>{`${degreesDay}°/${degreesNight}°`}</p>
    </div>
  );
};
