import { FC, useState } from 'react';

import { useFormValidation } from '@hooks';
import { CITIES_LIST, DEFAULT_TRIP } from '@constants';
import { generateID, getImgURLByCityName } from '@helpers';
import { ITrip, ITripInitial } from '@types';

import {
  CityPicker,
  CustomButton,
  DatePicker,
  ServiceButton,
} from '@components';

import style from './AddTripForm.module.scss';

interface FormProps {
  onClose: () => void;
  onAddNewTrip: (newTrip: ITrip) => void;
}

export const AddTripForm: FC<FormProps> = ({ onClose, onAddNewTrip }) => {
  const [trip, setTrip] = useState<ITripInitial>(DEFAULT_TRIP);

  const { isValidForm, cityError, startDateError, endDateError, formError } =
    useFormValidation(trip);

  const onDataChange = (newData: { [string]: string | null }) => {
    setTrip((prevData) => ({ ...prevData, ...newData }));
  };

  const onCancel = () => {
    setTrip(DEFAULT_TRIP);
    onClose();
  };

  const onSave = () => {
    if (!trip?.city || !trip?.startDate || !trip?.startDate) return;

    const imgURL: string = getImgURLByCityName(trip.city, CITIES_LIST);
    const id: number = generateID();

    const newTrip: ITrip = {
      ...trip,
      imgURL,
      id,
    };

    onAddNewTrip(newTrip);
    onClose();
  };

  return (
    <form
      className={style.container}
      onSubmit={(e) => e.preventDefault()}
    >
      {/* HEADER here */}
      <div
        className={style.header}
        data-error={formError}
      >
        <h5>Create Trip</h5>

        <ServiceButton
          type="close"
          onClick={onClose}
        />
      </div>

      {/* MAIN SECTION here */}
      <div className={style.main}>
        {/* City picker */}

        <CityPicker
          value={trip.city}
          name="city"
          onChange={onDataChange}
          error={cityError}
        />

        {/* Date pickers */}
        <DatePicker
          title="Start Date"
          name="startDate"
          onChange={onDataChange}
          value={trip.startDate}
          error={startDateError}
        />
        <DatePicker
          title="End Date"
          name="endDate"
          onChange={onDataChange}
          value={trip.endDate}
          error={endDateError}
        />
      </div>

      {/* FOOTER here */}
      <div className={style.footer}>
        <CustomButton
          type="cancel"
          buttonText="Cancel"
          onClick={onCancel}
        />

        <CustomButton
          type="save"
          buttonText="Save"
          isDisabled={!isValidForm}
          onClick={onSave}
        />
      </div>
    </form>
  );
};
