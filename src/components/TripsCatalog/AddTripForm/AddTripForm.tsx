import { FC, useState } from 'react';

import calendarIcon from '@assets/images/calendar.svg';

import { CustomButton, ServiceButton } from '@components';

import style from './AddTripForm.module.scss';

interface FormProps {
  onClose: () => void;
}

export const AddTripForm: FC<FormProps> = ({ onClose }) => {
  const [isFocused1, setFocused1] = useState(false);

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
        {/* Date picker */}
        <label
          htmlFor="datepick"
          className={style.select_label}
        >
          <img
            src={calendarIcon}
            alt="Calendar"
          />
          {isFocused1 ? (
            <input
              id="datepick"
              type="date"
            />
          ) : (
            <input
              type="text"
              placeholder="Select Date"
              onFocus={() => setFocused1(true)}
            />
          )}
        </label>
      </div>
      <div className={style.footer}>
        <CustomButton
          type="cancel"
          buttonText="Cancel"
          isDisabled={false}
          onClick={() => console.log('Form is Cancel')}
        />

        <CustomButton
          type="save"
          buttonText="Save"
          isDisabled={false}
          onClick={() => console.log('Form is Saved')}
        />
      </div>
    </div>
  );
};
