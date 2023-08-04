import { ChangeEvent, FC } from 'react';

import searchIcon from '@assets/images/search.svg';

import style from './Search.module.scss';

interface SearchProps {
  value: string;

  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ value, onSearch }) => {
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
        value={value}
        onChange={onSearch}
        type="search"
        id="search"
        autoComplete="off"
        placeholder="Search your trip..."
      />
    </label>
  );
};
