import { FC } from 'react';

import style from './Dropdown.module.scss';

interface DropdownProps {
  list: any[];
  isVisible: boolean;
  onPick: (cityName: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ list, isVisible, onPick }) => {
  if (!isVisible) return null;

  return (
    <ul className={style.dropdown}>
      {list.map(({ name, id, imgURL }) => (
        <li
          className={style.dropdown_item}
          key={id}
        >
          <button
            className={style.dropdown_btn}
            type="button"
            onClick={() => onPick(name)}
          >
            <img
              className={style.dropdown_img}
              src={imgURL}
              alt={name}
            />
            <span>{name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
