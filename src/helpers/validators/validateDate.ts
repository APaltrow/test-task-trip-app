export const validateDate = (userInputDate: string, dateRange: number) => {
  if (!userInputDate) return 'Field cannot be empty';

  const todayDate = new Date();

  /* Generating date from user's input */

  const inputDate = new Date(
    Number(userInputDate.split('-')[0]),
    Number(userInputDate.split('-')[1]) - 1,
    Number(userInputDate.split('-')[2]),
  );

  /* Generating end-date  and adding the validation DATE RANGE  */

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + dateRange); // in our case RANGE should be 15 days

  if (inputDate < todayDate) {
    return 'Invalid date. Past dates are not allowed.';
  }

  if (inputDate > endDate) {
    return `Date should be within the next ${dateRange} days`;
  }

  return '';
};
