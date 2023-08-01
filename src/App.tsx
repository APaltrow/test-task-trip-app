import { FC } from 'react';

import logo from '@assets/images/logo.png';
import rainy from '@assets/images/rainy.png';

import { ForecastCatalog, Header, ToolBar, TripsCatalog } from '@components';

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
        <img
          className={style.logo}
          src={logo}
          alt="Pinguin logo"
        />

        <div className={style.widget}>
          <h3>Sunday</h3>

          <div className={style.widget_temperature}>
            <img
              className={style.widget_img}
              src={rainy}
              alt="weather img"
            />
            <p>
              24<sup>°C</sup>
            </p>
            <span>Berlin</span>
          </div>
        </div>

        <div>COUNTDOWN TIMER</div>
      </div>
    </div>
  );
};
