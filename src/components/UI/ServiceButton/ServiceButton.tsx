import { FC } from 'react';

import closeIcon from '@assets/images/close.svg';
import arrowIcon from '@assets/images/arrowDown.svg';

import style from './ServiceButton.module.scss';

const SERVICE_ICONS = {
  close: closeIcon,
  arrowDown: arrowIcon,
};

interface ServiceButtonProps {
  type: string;
  disabled?: boolean;

  onClick: () => void;
}

export const ServiceButton: FC<ServiceButtonProps> = ({
  type,
  disabled,
  onClick,
}) => {
  const iconURL: string = SERVICE_ICONS[type];
  return (
    <button
      className={style.close_btn}
      onClick={onClick}
      disabled={disabled || false}
      type="button"
    >
      <img
        src={iconURL}
        alt={type}
      />
    </button>
  );
};
