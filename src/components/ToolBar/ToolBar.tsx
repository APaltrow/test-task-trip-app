import { ChangeEvent, FC } from 'react';

import {
  getTripsState,
  setActiveTrip,
  setSearchVale,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { ServiceButton, Search } from '@components';

import style from './ToolBar.module.scss';

//  TODO ======  Implement next and previous buttons
//  TODO ======  Sort trips by start trip date

export const ToolBar: FC = () => {
  const dispatch = useAppDispatch();
  const { trips, activeTrip, searchValue } = useAppSelector(getTripsState);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchVale(e.target.value));
  };

  const onChangeActiveTrip = (activeTripIdx: number) => {
    if (activeTripIdx > trips.length) {
      dispatch(setActiveTrip(0));
      return;
    }

    dispatch(setActiveTrip(activeTripIdx));
  };

  return (
    <div className={style.toolbar_container}>
      <Search
        value={searchValue}
        onSearch={onSearch}
      />

      {!searchValue ? (
        <>
          <ServiceButton
            type="previous"
            disabled={activeTrip <= 0}
            onClick={() => onChangeActiveTrip(activeTrip - 1)}
          />

          <ServiceButton
            type="next"
            disabled={activeTrip >= trips.length - 1}
            onClick={() => onChangeActiveTrip(activeTrip + 1)}
          />
        </>
      ) : null}
    </div>
  );
};
