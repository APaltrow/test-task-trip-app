import { FC, useEffect, useState } from 'react';

import {
  CityPicker,
  CustomButton,
  DatePicker,
  ServiceButton,
} from '@components';

import style from './AddTripForm.module.scss';

interface FormProps {
  onClose: () => void;
}

export const AddTripForm: FC<FormProps> = ({ onClose }) => {
  const [trip, setTrip] = useState({
    city: null,
    startDate: null,
    endDate: null,
  });

  const [isValidForm, setValidForm] = useState(false);

  const onDataChange = (data: { [string]: string | null }) => {
    setTrip((prev) => ({ ...prev, ...data }));
  };

  const onCancel = () => {
    onClose();
  };

  const onSave = () => {
    console.log('Form is Saved');
  };

  useEffect(() => {
    const isValid = Object.values(trip).filter((value) => value === null);

    if (isValid.length) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [trip]);

  return (
    <div className={style.container}>
      <div className={style.header}>
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
