import { FC, useEffect } from 'react';

import bgIcon from '@assets/images/background.svg';

import { setTrips, useAppDispatch } from '@redux';
import { useLocalStorage } from '@hooks';

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
  const dispatch = useAppDispatch();
  const { getFromLocalStorage } = useLocalStorage();

  useEffect(() => {
    const tripsFromStorage = getFromLocalStorage();
    if (!tripsFromStorage) return;

    dispatch(setTrips(tripsFromStorage));
  }, []);

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
