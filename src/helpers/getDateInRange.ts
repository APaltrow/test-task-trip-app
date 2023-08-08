export const getDateInRange = (startDate: Date, range: number) => {
  const minDate = startDate.toISOString().split('T')[0];

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + range);
  const maxDate = currentDate.toISOString().split('T')[0];

  return {
    minDate,
    maxDate,
  };
};
