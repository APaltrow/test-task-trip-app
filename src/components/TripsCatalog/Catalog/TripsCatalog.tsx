import { FC } from 'react';

import {
  getTripsState,
  setActiveTrip,
  setTrips,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { useModal, useLocalStorage } from '@hooks';
import { sortByStartDate } from '@helpers';
import { ITrip } from '@types';

import { AddButton, CustomModal } from '@components';

import style from './TripsCatalog.module.scss';

import { TripsCard } from '../Card';
import { AddTripForm } from '../AddTripForm';

export const TripsCatalog: FC = () => {
  const dispatch = useAppDispatch();
  const { setToLocalStorage } = useLocalStorage();
  const [isVisible, handleModal] = useModal();

  const { trips, activeTrip, filteredTrips, searchValue } =
    useAppSelector(getTripsState);

  const onAddNewTrip = (newTrip: ITrip) => {
    const updatedTrips = [...trips, newTrip].sort(sortByStartDate);

    dispatch(setTrips(updatedTrips));

    setToLocalStorage(updatedTrips);
  };

  const onSelectActive = (activeId: number) => {
    dispatch(setActiveTrip(activeId));
  };

  return (
    <div className={style.trips_catalog}>
      <div className={style.container}>
        {(searchValue ? filteredTrips : trips).map(
          ({ city, startDate, endDate, imgURL, id }) => (
            <TripsCard
              key={id}
              onSelectActive={() => onSelectActive(id)}
              isActive={activeTrip === id}
              startDate={startDate}
              endDate={endDate}
              city={city}
              url={imgURL}
            />
          ),
        )}
        {/* ADD BUTTON HERE */}
        <div>
          <AddButton onClick={() => handleModal(true)} />
        </div>
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
