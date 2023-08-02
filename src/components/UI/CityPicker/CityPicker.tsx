import { FC, useEffect, useState } from 'react';

import { ServiceButton } from '@components';

import { Dropdown } from './Dropdown';

import style from './CityPicker.module.scss';

const CITIES_LIST = [
  {
    name: 'Berlin',
    id: 1,
    imgURL:
      'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
  },
  {
    name: 'Barcelona',
    id: 2,
    imgURL:
      'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg',
  },
  {
    name: 'Tokyo',
    id: 3,
    imgURL:
      'https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg?resize=2048:*',
  },
  {
    name: 'Milan',
    id: 4,
    imgURL: 'https://lp-cms-production.imgix.net/2021-10/Milan_nightlife.jpg',
  },
];

interface CityPickerProps {
  name: string;
  onChange: (arg: { [string]: string | null }) => void;
}

export const CityPicker: FC<CityPickerProps> = ({ name, onChange }) => {
  const [citiesList, setCitiesList] = useState(CITIES_LIST);
  const [isVisible, setVisible] = useState(false);
  const [city, setCity] = useState('');

  const [error, setError] = useState<string | null>(null);

  const onCityPick = (cityName: string) => {
    setCity(cityName);
    setVisible(false);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);

    if (!event.target.value) {
      setVisible(false);
      return;
    }

    setVisible(true);
  };

  const validateCityName = (cityName: string) => {
    if (!cityName) {
      //  console.log('No city name');
      setError('Field should not be empty');

      onChange({ [name]: null });
      return;
    }
    const isValidName = CITIES_LIST.filter(
      (cityItem) => cityItem.name.toLowerCase() === cityName.toLowerCase(),
    );

    if (isValidName.length) {
      // console.log('CITY IS OK', isValidName);
      onChange({ [name]: cityName });
      setError(null);
    } else {
      // console.log('Invalid name');
      onChange({ [name]: null });
      setError('Invalid city name');
    }
  };

  useEffect(() => {
    const filterByInput = () => {
      const filtered = CITIES_LIST.filter((cityItem) =>
        cityItem.name.toLowerCase().includes(city.toLowerCase()),
      );

      setCitiesList(filtered);
    };

    validateCityName(city);

    if (city) {
      filterByInput();
    } else {
      setCitiesList(CITIES_LIST);
    }
  }, [city]);

  return (
    <>
      <p className={style.title}>
        <span>* </span>
        City
      </p>
      <label
        htmlFor="citypicker"
        className={style.select_city_label}
      >
        <input
          className={style.select_city_input}
          value={city}
          onChange={onCityChange}
          placeholder="Please select a city"
          id="citypicker"
          type="text"
        />
        <span className={style.select_city_img}>
          <ServiceButton
            type="arrowDown"
            onClick={() => setVisible(true)}
          />
        </span>

        {isVisible ? (
          <Dropdown
            onPick={onCityPick}
            data={citiesList}
          />
        ) : null}
      </label>
      <p>{error}</p>
    </>
  );
};
