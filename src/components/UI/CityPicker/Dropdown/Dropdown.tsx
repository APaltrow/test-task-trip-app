import { FC } from 'react';

import style from './Dropdown.module.scss';

interface DropdownProps {
  data: any[];
  isVisible: boolean;
  onPick: (cityName: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ data, isVisible, onPick }) => {
  if (!isVisible) return null;

  return (
    <ul className={style.dropdown}>
      {data.map(({ name, id, imgURL }) => (
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
