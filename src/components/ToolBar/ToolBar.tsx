import { ChangeEvent, FC } from 'react';

import {
  getTripsState,
  setActiveTrip,
  setSearchVale,
  setSortOrder,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { ServiceButton, Search, Error } from '@components';

import style from './ToolBar.module.scss';

export const ToolBar: FC = () => {
  const dispatch = useAppDispatch();
  const { trips, filteredTrips, activeTrip, searchValue, sortOrder } =
    useAppSelector(getTripsState);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchVale(e.target.value));
  };

  const onChangeActiveTrip = (activeTripIdx: number) => {
    if (activeTripIdx > trips.length) {
      dispatch(setActiveTrip(trips[0].id));
      return;
    }

    dispatch(setActiveTrip(trips[activeTripIdx].id));
  };

  const onSortOrderChange = (order: 'asc' | 'desc') => {
    dispatch(setSortOrder(order));
  };

  const isVisible = trips.length > 1 && !searchValue;
  const isError = !!searchValue && !filteredTrips.length;

  const activeTripIndex = trips.indexOf(
    trips.find((trip) => trip.id === activeTrip),
  );

  return (
    <div className={style.toolbar_container}>
      {/* SEARCH here */}
      <Search
        value={searchValue}
        onSearch={onSearch}
      />
      {isError && <Error errorMessage={`'${searchValue}' is not found`} />}
      {isVisible ? (
        <>
          {/* PAGGINATION here */}
          <ServiceButton
            type="previous"
            disabled={activeTripIndex <= 0}
            onClick={() => onChangeActiveTrip(activeTripIndex - 1)}
          />
          <span className={style.info}>
            {`${activeTripIndex + 1} / ${trips.length}`}
          </span>
          <ServiceButton
            type="next"
            disabled={activeTripIndex >= trips.length - 1}
            onClick={() => onChangeActiveTrip(activeTripIndex + 1)}
          />

          {/* SORT here */}
          <span className={style.info}>
            {sortOrder === 'asc' ? 'ascending' : 'descending'}
          </span>
          <span className={sortOrder === 'asc' ? style.sort_btn : ''}>
            <ServiceButton
              type="arrowDown"
              onClick={() =>
                onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')
              }
            />
          </span>
        </>
      ) : null}
    </div>
  );
};
