import { ChangeEvent, FC, useEffect, useState } from 'react';
import calendarIcon from '@assets/images/calendar.svg';

import { useDateValidation } from '@hooks';

import style from './DatePicker.module.scss';

interface DatePickerProps {
  title: string;
  name: string;

  onChange: (arg: { [string]: string | null }) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ title, name, onChange }) => {
  const [isFocused, setFocused] = useState(false);
  const [date, setDate] = useState<null | string>(null);

  const { error } = useDateValidation(date);

  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    if (!error) {
      onChange({ [name]: date });
    } else {
      onChange({ [name]: null });
    }
  }, [date, error]);

  return (
    <label
      htmlFor="datepick"
      className={style.select_label}
      data-error={error}
    >
      <span className={style.title}>{title}</span>

      {isFocused ? (
        <input
          id="datepick"
          type="date"
          onChange={onDateChange}
        />
      ) : (
        <input
          type="text"
          placeholder="Select Date"
          onFocus={() => setFocused(true)}
        />
      )}

      <img
        className={style.icon}
        src={calendarIcon}
        alt="calendar"
      />
    </label>
  );
};
