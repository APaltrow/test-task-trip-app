import { FC } from 'react';

import style from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header>
      <h1>
        <span className={style.header_text}>Weather </span>
        Forecast
      </h1>
    </header>
  );
};
