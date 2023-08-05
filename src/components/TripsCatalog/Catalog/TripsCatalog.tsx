import { FC } from 'react';

import { AddButton, CustomModal } from '@components';

import {
  addNewTrip,
  getTripsState,
  setActiveTrip,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { useModal } from '@hooks';
import { sortByStartDate } from '@helpers';
import { ITrip } from '@types';

import style from './TripsCatalog.module.scss';

import { TripsCard } from '../Card';
import { AddTripForm } from '../AddTripForm';

export const TripsCatalog: FC = () => {
  const dispatch = useAppDispatch();

  const [isVisible, handleModal] = useModal();
  const { trips, activeTrip, filteredTrips, searchValue } =
    useAppSelector(getTripsState);

  const onAddNewTrip = (newTrip: ITrip) => {
    dispatch(addNewTrip([...trips, newTrip].sort(sortByStartDate)));
  };

  const onSelectActive = (activeId: number) => {
    dispatch(setActiveTrip(activeId));
  };

  return (
    <div className={style.trips_catalog}>
      {(searchValue ? filteredTrips : trips).map(
        ({ city, startDate, endDate, imgURL, id }, index) => (
          <TripsCard
            key={id}
            onSelectActive={() => onSelectActive(id)}
            isActive={activeTrip === index}
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
