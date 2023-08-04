export const compareDates = (
  firstDate: string,
  secondDate: string,
): boolean => {
  const first = new Date(
    firstDate.split('-')[0],
    firstDate.split('-')[1] - 1,
    firstDate.split('-')[2],
  );

  const second = new Date(
    secondDate.split('-')[0],
    secondDate.split('-')[1] - 1,
    secondDate.split('-')[2],
  );

  return first > second;
};
