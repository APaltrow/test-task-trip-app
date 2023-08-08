import { ChangeEvent, FC, useState } from 'react';
import calendarIcon from '@assets/images/calendar.svg';

import style from './DatePicker.module.scss';

interface DatePickerProps {
  title: string;
  name: string;
  error: string | null;
  value: string;

  onChange: (arg: { [string]: string | null }) => void;
}

export const DatePicker: FC<DatePickerProps> = ({
  title,
  name,
  error,
  value,
  onChange,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ [name]: event.target.value });
  };

  return (
    <label
      htmlFor="datepick"
      className={style.select_label}
      data-error={isFocused && isTouched ? error : ''}
    >
      <span className={style.title}>{title}</span>

      {isFocused ? (
        <input
          id="datepick"
          type="date"
          onChange={onDateChange}
          onBlur={() => setTouched(true)}
          value={value}
        />
      ) : (
        <input
          type="text"
          placeholder="Select Date"
          onFocus={() => setFocused(true)}
          readOnly
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
