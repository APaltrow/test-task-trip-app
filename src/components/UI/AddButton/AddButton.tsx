import { FC } from 'react';

import addIcon from '@assets/images/plus.svg';

import style from './AddButton.module.scss';

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className={style.addTrip_btn}
      onClick={onClick}
    >
      <img
        src={addIcon}
        alt="plus icon"
      />
      <span>Add Trip</span>
    </button>
  );
};
