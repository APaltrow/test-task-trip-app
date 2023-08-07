import { ChangeEvent, FC } from 'react';

import {
  getTripsState,
  setActiveTrip,
  setSearchVale,
  setSortOrder,
  setTrips,
  useAppDispatch,
  useAppSelector,
} from '@redux';
import { useLocalStorage } from '@hooks';
import { sortByStartDate } from '@helpers';

import { ServiceButton, Search, Error } from '@components';

import style from './ToolBar.module.scss';

export const ToolBar: FC = () => {
  const dispatch = useAppDispatch();
  const { setToLocalStorage } = useLocalStorage();

  const { filteredTrips, ...storage } = useAppSelector(getTripsState);
  const { trips, activeTrip, searchValue, sortOrder } = storage;

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    dispatch(setSearchVale(userInput));
    setToLocalStorage({ ...storage, searchValue: userInput });
  };

  const onChangeActiveTrip = (activeTripIdx: number) => {
    const activeTripID =
      activeTripIdx > trips.length ? trips[0].id : trips[activeTripIdx].id;

    dispatch(setActiveTrip(activeTripID));
    setToLocalStorage({ ...storage, activeTrip: activeTripID });
  };

  const onSortOrderChange = (order: 'asc' | 'desc') => {
    const sortedTrips = [...trips].sort((trip1, trip2) =>
      sortByStartDate(trip1, trip2, order),
    );

    dispatch(setSortOrder(order));
    dispatch(setTrips(sortedTrips));
    setToLocalStorage({ ...storage, trips: sortedTrips, sortOrder: order });
  };

  const isVisible = trips.length > 1 && !searchValue;
  const isError = !!searchValue && !filteredTrips.length;

  const activeTripIndex = trips.indexOf(
    trips.find((trip) => trip.id === activeTrip),
  );

  return (
    <div className={style.container}>
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
