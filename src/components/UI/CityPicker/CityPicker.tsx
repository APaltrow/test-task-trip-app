import { FC, useState } from 'react';

import { CITIES_LIST } from '@constants';

import { ServiceButton, Dropdown } from '@components';

import style from './CityPicker.module.scss';

interface CityPickerProps {
  name: string;
  value: string;
  error: string;

  onChange: (arg: { [string]: string | null }) => void;
}

export const CityPicker: FC<CityPickerProps> = ({
  name,
  value,
  error,

  onChange,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const onPickCity = (cityName: string) => {
    onChange({ [name]: cityName });
    setVisible(false);
  };

  return (
    <div className={style.container}>
      <label
        htmlFor="citypicker"
        className={style.label}
        data-error={isTouched ? error : ''}
      >
        {/* TITLE */}
        <span className={style.title}>City</span>
        {/* INPUT */}
        <input
          className={style.input}
          value={value}
          name={name}
          onBlur={() => setTouched(true)}
          onFocus={() => setVisible(true)}
          id="citypicker"
          type="text"
          placeholder="Please select a city"
          autoComplete="off"
          readOnly
        />

        {/* SELECT Button */}
        <span className={style.btn}>
          <ServiceButton
            type="arrowDown"
            onClick={() => setVisible((prev) => !prev)}
          />
        </span>
      </label>
      {/* DROPDOWN with options */}
      <Dropdown
        list={CITIES_LIST}
        isVisible={isVisible}
        onPick={onPickCity}
      />
    </div>
  );
};
