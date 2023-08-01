import { FC } from 'react';

import addIcon from '@assets/images/plus.svg';

import style from './AddButton.module.scss';

export const AddButton: FC = () => {
  return (
    <button
      type="button"
      className={style.addTrip_btn}
    >
      <img
        src={addIcon}
        alt="plus icon"
      />
      <span>Add Trip</span>
    </button>
  );
};
