export const filterCityByInput = (cityName: string, cityList: any[]) => {
  return cityList.filter((cityItem) =>
    cityItem.name.toLowerCase().includes(cityName.toLowerCase()),
  );
};
