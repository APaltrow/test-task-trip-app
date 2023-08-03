import { useState, useEffect } from 'react';

type Date = string | null;

export const useFormValidation = (trip) => {
  const [isValidForm, setValidForm] = useState(false);
  const [error, setError] = useState('');

  /*
   Checking if Start Date and End Date are correctly set
 ---> End date cannot be less than Start date
  */
  const isCorrectDates = (startDate: Date, endDate: Date) => {
    if (!startDate || !endDate) return;

    const inputStartDate = new Date(
      startDate.split('-')[0],
      startDate.split('-')[1] - 1,
      startDate.split('-')[2],
    );
    const inputEndDate = new Date(
      endDate.split('-')[0],
      endDate.split('-')[1] - 1,
      endDate.split('-')[2],
    );

    if (inputStartDate > inputEndDate) {
      setError('End Date cannot be less than Start Date');
    } else {
      setError('');
    }
  };

  useEffect(() => {
    /* checking if there is any field in the Trip object is not fulfilled */
    const isValid = Object.values(trip).filter((value) => value === null);

    isCorrectDates(trip.startDate, trip.endDate);

    if (error) {
      setValidForm(false);
      return;
    }

    if (isValid.length) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [trip, error]);

  return {
    isValidForm,
    error,
  };
};
