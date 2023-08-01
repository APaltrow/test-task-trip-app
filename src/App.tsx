import { FC } from 'react';

import {
  ForecastCatalog,
  Header,
  ToolBar,
  TripsCatalog,
  Logo,
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
        <Logo />
        <WeatherWidget />
        <CountDownTimer />
      </div>
    </div>
  );
};
