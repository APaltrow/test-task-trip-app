import { FC } from 'react';

import searchIcon from '@assets/images/search.svg';

import style from './Search.module.scss';

export const Search: FC = () => {
  return (
    <label
      htmlFor="search"
      className={style.search_label}
    >
      <img
        className={style.search_icon}
        src={searchIcon}
        alt="search icon"
      />
      <input
        className={style.search}
        type="search"
        id="search"
        autoComplete="off"
        placeholder="Search your trip..."
      />
    </label>
  );
};
