import { FC } from 'react';

import bgIcon from '@assets/images/background.svg';

import {
  Logo,
  Header,
  ToolBar,
  TripsCatalog,
  ForecastCatalog,
  WeatherWidget,
  CountDownTimer,
} from '@components';

import style from '@style/app.module.scss';

export const App: FC = () => {
  return (
    <div className={style.app}>
      {/*  MAIN   Section */}

      <div className={style.left}>
        <Header />
        <ToolBar />
        <TripsCatalog />
        <ForecastCatalog />
      </div>

      {/*  RIGHT SIDE Widget */}

      <div className={style.right}>
        <div className={style.container}>
          <Logo />
          <WeatherWidget />
        </div>

        <CountDownTimer />

        {/*  BG-Images here */}
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
      </div>
    </div>
  );
};
