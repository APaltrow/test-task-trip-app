import { FC } from 'react';

import loaderIcon from '@assets/images/loader.svg';

import style from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={style.container}>
      <img
        className={style.icon}
        src={loaderIcon}
        alt="loader"
      />
      <span>Loading ...</span>
    </div>
  );
};
