import { FC, useState } from 'react';

import {
  CityPicker,
  CustomButton,
  DatePicker,
  ServiceButton,
} from '@components';
import { useFormValidation } from '@hooks';
import { CITIES_LIST } from '@constants';

import style from './AddTripForm.module.scss';

const DEFAULT_TRIP = {
  city: null,
  startDate: null,
  endDate: null,
};

interface FormProps {
  onClose: () => void;
  onAddNewTrip: () => void;
}

export const AddTripForm: FC<FormProps> = ({ onClose, onAddNewTrip }) => {
  const [trip, setTrip] = useState(DEFAULT_TRIP);

  const { isValidForm, error } = useFormValidation(trip);

  const onDataChange = (data: { [string]: string | null }) => {
    setTrip((prev) => ({ ...prev, ...data }));
  };

  const onCancel = () => {
    setTrip(DEFAULT_TRIP);
    onClose();
  };

  const onSave = () => {
    /** TODO : refactor img func */

    const imgURL = CITIES_LIST.filter(
      (item) => item.name.toLowerCase() === trip.city.toLowerCase(),
    )[0].imgURL;

    onAddNewTrip({
      ...trip,

      id: Date.now(),
      imgURL,
    });

    onClose();
  };

  return (
    <div className={style.container}>
      <div
        className={style.header}
        data-error={error}
      >
        <h5>Create Trip</h5>

        <ServiceButton
          type="close"
          onClick={onClose}
        />
      </div>

      <div className={style.main}>
        {/* City picker */}
        <CityPicker
          name="city"
          onChange={onDataChange}
        />
        {/* Date picker */}
        <DatePicker
          title="Start Date"
          name="startDate"
          onChange={onDataChange}
        />
        <DatePicker
          title="End Date"
          name="endDate"
          onChange={onDataChange}
        />
      </div>

      <div className={style.footer}>
        <CustomButton
          type="cancel"
          buttonText="Cancel"
          isDisabled={false}
          onClick={onCancel}
        />

        <CustomButton
          type="save"
          buttonText="Save"
          isDisabled={!isValidForm}
          onClick={onSave}
        />
      </div>
    </div>
  );
};
