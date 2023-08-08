import { useState, useEffect } from 'react';

import { compareDates, validateDate } from '@helpers';
import { ITripInitial } from '@types';

const VALID_DAYS_RANGE = 15;

export const useFormValidation = (trip: ITripInitial) => {
  const [isValidForm, setValidForm] = useState(false);

  const [cityError, setCityError] = useState<string>('');
  const [startDateError, setStartDateError] = useState<string>('');
  const [endDateError, setEndDateError] = useState<string>('');

  const [formError, setFormError] = useState('');

  useEffect(() => {
    /** Validating City */

    if (!trip.city) {
      setCityError('Field cannot be empty');
    } else {
      setCityError('');
    }

    /** Validating Start Date */
    const isStartDateValid = validateDate(trip.startDate, VALID_DAYS_RANGE);

    if (isStartDateValid) {
      setStartDateError(isStartDateValid);
    } else {
      setStartDateError('');
    }

    /** Validating End Date */
    const isEndDateValid = validateDate(trip.endDate, VALID_DAYS_RANGE);

    if (isEndDateValid) {
      setEndDateError(isEndDateValid);
    } else {
      setEndDateError('');
    }

    /* Validating If start date is bigger than end date. If not = error */
    const isStartDateBigger = compareDates(trip.startDate, trip.endDate);

    if (isStartDateBigger) {
      setFormError('End Date cannot be less than Start Date');
    } else {
      setFormError('');
    }
  }, [trip]);

  useEffect(() => {
    /** Validating if there is any empty fields in the Trip Object */
    const isEmptyField = Object.values(trip).filter((value) => !value);

    const isError =
      cityError ||
      startDateError ||
      endDateError ||
      formError ||
      isEmptyField.length;

    if (isError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [isValidForm, cityError, startDateError, endDateError, formError]);

  return {
    isValidForm,
    cityError,
    startDateError,
    endDateError,
    formError,
  };
};
