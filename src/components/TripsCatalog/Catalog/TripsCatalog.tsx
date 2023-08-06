import { FC } from 'react';

import { AddButton, CustomModal } from '@components';

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

import style from './TripsCatalog.module.scss';

import { TripsCard } from '../Card';
import { AddTripForm } from '../AddTripForm';

export const TripsCatalog: FC = () => {
  const dispatch = useAppDispatch();

  const [isVisible, handleModal] = useModal();
  const { trips, activeTrip, filteredTrips, searchValue } =
    useAppSelector(getTripsState);

  const onAddNewTrip = (newTrip: ITrip) => {
    dispatch(setTrips([...trips, newTrip].sort(sortByStartDate)));
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

        <div>
          <AddButton onClick={() => handleModal(true)} />
        </div>
      </div>

      {/* ADD BUTTON HERE */}

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
