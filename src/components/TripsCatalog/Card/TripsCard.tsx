import { FC, useEffect, useRef } from 'react';

import { formatDate } from '@helpers';

import style from './TripsCard.module.scss';

interface TripsCardProps {
  city: string;
  url: string;
  startDate: string;
  endDate: string;
  isActive: boolean;

  onSelectActive: () => void;
}

export const TripsCard: FC<TripsCardProps> = ({
  city,
  url,
  startDate,
  endDate,
  isActive,

  onSelectActive,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!btnRef?.current) return;

    if (isActive) {
      btnRef.current.scrollIntoView();
    }
  }, [isActive]);

  return (
    <button
      ref={btnRef}
      type="button"
      className={isActive ? style.card_btn_active : style.card_btn}
      onClick={onSelectActive}
    >
      <div className={style.trips_card}>
        <img
          className={style.trips_image}
          src={url}
          alt={city}
        />
        <h5>{city}</h5>
        <p>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</p>
      </div>
    </button>
  );
};
