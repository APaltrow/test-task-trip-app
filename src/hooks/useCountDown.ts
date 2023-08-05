import { useEffect, useRef, useState } from 'react';

export const useCountDown = (dateToCount: string) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerId = useRef<NodeJS.Timer>();

  const startTimer = () => {
    const countdownDate = new Date(dateToCount).getTime();

    timerId.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const daysCalc = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursCalc = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutesCalc = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
      );
      const secondsCalc = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        clearInterval(timerId.current);
      } else {
        setDays(daysCalc);
        setHours(hoursCalc);
        setMinutes(minutesCalc);
        setSeconds(secondsCalc);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timerId.current);
    };
  });

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
