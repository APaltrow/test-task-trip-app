import { FC } from 'react';

import { SERVICE_ICONS } from '@constants';

import style from './ServiceButton.module.scss';

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
      className={style.service_btn}
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
