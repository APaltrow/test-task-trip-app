import { FC } from 'react';

import rainy from '@assets/images/rainy.png';

import style from './WeatherWidget.module.scss';

export const WeatherWidget: FC = () => {
  return (
    <div className={style.widget}>
      <h3>Sunday</h3>

      <div className={style.widget_temperature}>
        <img
          className={style.widget_img}
          src={rainy}
          alt="weather icon"
        />
        <p>
          24<sup>°C</sup>
        </p>
        <span>Berlin</span>
      </div>
    </div>
  );
};
