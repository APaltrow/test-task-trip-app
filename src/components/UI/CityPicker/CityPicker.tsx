import { ChangeEvent, FC, useEffect, useState } from 'react';

import { ServiceButton } from '@components';
import { filterCityByInput } from '@helpers';
import { useCityValidation } from '@hooks';
import { CITIES_LIST } from '@constants';

import { Dropdown } from './Dropdown';

import style from './CityPicker.module.scss';

interface CityPickerProps {
  name: string;
  onChange: (arg: { [string]: string | null }) => void;
}

export const CityPicker: FC<CityPickerProps> = ({ name, onChange }) => {
  const [citiesList, setCitiesList] = useState(CITIES_LIST);

  const [isVisible, setVisible] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const [city, setCity] = useState('');

  const { error } = useCityValidation(city, isTouched, CITIES_LIST);

  /* on city name pick from the dropdown menu */
  const onCityPick = (cityName: string) => {
    setCity(cityName);
    setVisible(false);
  };
  /* on city name input by the user */
  const onCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);

    if (!event.target.value) {
      setVisible(false);
      return;
    }

    setVisible(true);
  };

  /* name input submit after Validation */

  useEffect(() => {
    if (!city) return;

    if (error) {
      onChange({ [name]: null });
    } else {
      onChange({ [name]: city });
    }
  }, [city, error]);

  /* FILTER city list by the user's input */

  useEffect(() => {
    if (city) {
      setCitiesList(filterCityByInput(city, CITIES_LIST));
    } else {
      setCitiesList(CITIES_LIST);
    }
  }, [city]);

  return (
    <label
      htmlFor="citypicker"
      className={style.select_city_label}
      data-error={error}
    >
      <span className={style.title}>City</span>

      <input
        className={style.select_city_input}
        value={city}
        onChange={onCityChange}
        onFocus={() => setIsTouched(true)}
        id="citypicker"
        type="text"
        placeholder="Please select a city"
      />

      <Dropdown
        data={citiesList}
        isVisible={isVisible}
        onPick={onCityPick}
      />

      <span className={style.select_btn}>
        <ServiceButton
          type="arrowDown"
          onClick={() => setVisible((prev) => !prev)}
        />
      </span>
    </label>
  );
};
