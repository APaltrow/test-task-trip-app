import { CITIES_LIST } from '@constants';

export const getImgURLByCityName = (cityName: string): string => {
  if (!cityName) return '';

  const city = CITIES_LIST.filter(
    (cityItem) => cityItem.name.toLowerCase() === cityName.toLowerCase(),
  );
  if (!city.length) return '';

  return city[0].imgURL;
};
