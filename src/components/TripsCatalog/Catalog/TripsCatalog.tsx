import { FC } from 'react';

import {
  getTripsState,
  setActiveTrip,
  setTrips,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { useModal } from '@hooks';
import { sortByStartDate } from '@helpers';
import { ITrip } from '@types';

import { AddButton, CustomModal } from '@components';

import style from './TripsCatalog.module.scss';

import { TripsCard } from '../Card';
import { AddTripForm } from '../AddTripForm';

export const TripsCatalog: FC = () => {
  const dispatch = useAppDispatch();

  const [isVisible, handleModal] = useModal();

  const { filteredTrips, ...storage } = useAppSelector(getTripsState);
  const { trips, activeTrip, searchValue, sortOrder } = storage;

  const onAddNewTrip = (newTrip: ITrip) => {
    const updatedTrips = [...trips, newTrip].sort((trip1, trip2) =>
      sortByStartDate(trip1, trip2, sortOrder),
    );

    dispatch(setTrips(updatedTrips));
  };

  const onSelectActive = (activeId: number) => {
    dispatch(setActiveTrip(activeId));
  };

  const tripsList = searchValue ? filteredTrips : trips;

  return (
    <div className={style.trips_catalog}>
      {/* LIST OF TRIPS HERE */}
      {tripsList.length ? (
        <div className={style.container}>
          {tripsList.map(({ city, startDate, endDate, imgURL, id }) => (
            <TripsCard
              key={id}
              onSelectActive={() => onSelectActive(id)}
              isActive={activeTrip === id}
              startDate={startDate}
              endDate={endDate}
              city={city}
              url={imgURL}
            />
          ))}
        </div>
      ) : null}

      {/* ADD BUTTON HERE */}
      <div className={style.btn_container}>
        <AddButton onClick={() => handleModal(true)} />
      </div>

      {/* ADD Form with MODAL HERE */}
      <CustomModal
        isVisible={isVisible}
        handleModal={handleModal}
      >
        <AddTripForm
          onClose={() => handleModal(false)}
          onAddNewTrip={onAddNewTrip}
        />
      </CustomModal>
    </div>
  );
};
