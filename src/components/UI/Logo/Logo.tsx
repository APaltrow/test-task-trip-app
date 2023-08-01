import { FC } from 'react';

import logo from '@assets/images/logo.png';

import style from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <img
      className={style.logo}
      src={logo}
      alt="Pinguin logo"
    />
  );
};
