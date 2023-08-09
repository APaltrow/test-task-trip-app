import { ChangeEvent, FC, useState } from 'react';
import calendarIcon from '@assets/images/calendar.svg';

import { getDateInRange } from '@helpers';
import { VALID_DAYS_RANGE } from '@constants';

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
  const { minDate, maxDate } = getDateInRange(new Date(), VALID_DAYS_RANGE);

  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ [name]: event.target.value });
  };

  return (
    <label
      htmlFor="datepick"
      className={style.label}
      data-error={isFocused && isTouched ? error : ''}
    >
      <span className={style.title}>{title}</span>

      <input
        className={style.input}
        type={isFocused ? 'date' : 'text'}
        onChange={onDateChange}
        onBlur={() => setTouched(true)}
        onFocus={() => setFocused(true)}
        placeholder="Select Date"
        id="datepick"
        value={value}
        min={minDate}
        max={maxDate}
      />

      <img
        className={style.icon}
        src={calendarIcon}
        alt="calendar"
      />
    </label>
  );
};
