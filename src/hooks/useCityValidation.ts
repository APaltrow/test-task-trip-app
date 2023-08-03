import { useEffect, useState } from 'react';

export const useCityValidation = (
  city: string,
  isTouched: boolean,
  CITIES_LIST: any[],
) => {
  const [error, setError] = useState<string | null>(null);

  const validateName = (cityName: string, cityList: any[]) => {
    if (!cityName) {
      return 'Field should not be empty';
    }
    const isValidName = cityList.filter(
      (cityItem) => cityItem.name.toLowerCase() === cityName.toLowerCase(),
    );

    if (!isValidName.length) {
      return 'Invalid city name';
    }

    return null;
  };

  /* VALIDATION */

  useEffect(() => {
    if (!isTouched) return;

    const cityError = validateName(city, CITIES_LIST);

    if (cityError) {
      setError(cityError);
    } else {
      setError(null);
    }
  }, [city]);

  return { error };
};
