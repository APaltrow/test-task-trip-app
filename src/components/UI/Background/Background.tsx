import { FC } from 'react';

import bgIcon from '@assets/images/background.svg';

import style from './Background.module.scss';

/*  BG-Images are set as IMG instead of setting as Background-image due to webpack issue */

export const Background: FC = () => {
  return (
    <>
      <img
        className={style.bg_icon_1}
        src={bgIcon}
        alt="cloud"
      />
      <img
        className={style.bg_icon_2}
        src={bgIcon}
        alt="cloud"
      />
      <img
        className={style.bg_icon_3}
        src={bgIcon}
        alt="cloud"
      />
      <img
        className={style.bg_icon_4}
        src={bgIcon}
        alt="cloud"
      />
    </>
  );
};
