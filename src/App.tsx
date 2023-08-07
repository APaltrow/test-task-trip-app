import { FC, useEffect } from 'react';

import bgIcon from '@assets/images/background.svg';

import {
  setActiveTrip,
  setSearchVale,
  setSortOrder,
  setTrips,
  useAppDispatch,
} from '@redux';
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
    const localStoreData: Storage = getFromLocalStorage();
    if (!localStoreData) return;

    const { trips, searchValue, sortOrder, activeTrip } = localStoreData;

    dispatch(setTrips(trips));
    dispatch(setSortOrder(sortOrder));
    dispatch(setActiveTrip(activeTrip));
    dispatch(setSearchVale(searchValue));
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
