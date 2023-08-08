export const getImgURLByCityName = (cityName: string, list: any[]): string => {
  if (!cityName) return '';

  const city = list.filter(
    (cityItem) => cityItem.name.toLowerCase() === cityName.toLowerCase(),
  );
  if (!city.length) return '';

  return city[0].imgURL;
};
