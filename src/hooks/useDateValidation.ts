import { useEffect, useState } from 'react';

export const useDateValidation = (date: string) => {
  const [error, setError] = useState<string | null>(null);

  const validate = (userInputDate: string) => {
    if (!userInputDate) return;

    const todayDate = new Date();

    /* Generating date from user's input */

    const inputDate = new Date(
      userInputDate.split('-')[0],
      userInputDate.split('-')[1] - 1,
      userInputDate.split('-')[2],
    );

    /* Generating end-date (+15 days) */

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 15); // adding 15 days from today

    if (inputDate < todayDate) {
      setError('Invalid date. Past dates are not allowed.');
      return;
    }

    if (inputDate > endDate) {
      setError('Date should be within the next 15 days');
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    validate(date);
  }, [date]);

  return {
    error,
  };
};
