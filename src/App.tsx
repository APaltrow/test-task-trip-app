import { FC } from 'react';

import {
  Logo,
  Header,
  ToolBar,
  TripsCatalog,
  ForecastCatalog,
  WeatherWidget,
  CountDownTimer,
  Background,
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

        <Background />
      </div>
    </div>
  );
};
