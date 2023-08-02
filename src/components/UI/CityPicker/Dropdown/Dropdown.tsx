import { FC } from 'react';

import style from './Dropdown.module.scss';

interface DropdownProps {
  data: any[];
  onPick: (cityName: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ onPick, data }) => {
  return (
    <ul className={style.dropdown}>
      {data.map(({ name, id, imgURL }) => (
        <li
          key={id}
          className={style.dropdown_item}
          onClick={() => onPick(name)}
        >
          <img
            className={style.dropdown_img}
            src={imgURL}
            alt={name}
          />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};
