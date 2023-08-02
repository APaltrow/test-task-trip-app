import { FC } from 'react';

import style from './CustomButton.module.scss';

interface CustomButtonProps {
  type: 'save' | 'cancel';
  buttonText: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({
  type,
  buttonText,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={style[type]}
      onClick={onClick}
      disabled={isDisabled || false}
    >
      {buttonText}
    </button>
  );
};
