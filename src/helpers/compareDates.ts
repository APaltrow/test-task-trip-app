type CompareDates = (firstDate: string, secondDate: string) => boolean;

export const compareDates: CompareDates = (first, second) => {
  const firstDate = new Date(
    Number(first.split('-')[0]),
    Number(first.split('-')[1]) - 1,
    Number(first.split('-')[2]),
  );

  const secondDate = new Date(
    Number(second.split('-')[0]),
    Number(second.split('-')[1]) - 1,
    Number(second.split('-')[2]),
  );

  return firstDate > secondDate;
};
