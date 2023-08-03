import { FC, useState } from 'react';

import { AddButton, CustomModal } from '@components';

import { useModal } from '@hooks';

import { TripsCard } from '../Card';
import { AddTripForm } from '../AddTripForm';

import style from './TripsCatalog.module.scss';

const TRIPS = [
  {
    startDate: '2023-08-05',
    endDate: '2023-08-15',
    city: 'Berlin',
    id: 3,
    imgURL:
      'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
  },
];

export const TripsCatalog: FC = () => {
  const [isVisible, handleModal] = useModal();
  const [trips, setTrips] = useState(TRIPS);

  const onAddNewTrip = (newTrip) => {
    setTrips((prev) => [...prev, newTrip]);
  };
  console.log(trips);
  return (
    <div className={style.trips_catalog}>
      {trips.map(({ city, startDate, endDate, imgURL, id }) => (
        <TripsCard
          key={id}
          startDate={startDate}
          endDate={endDate}
          city={city}
          url={imgURL}
        />
      ))}

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
