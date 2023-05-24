import { useCallback, useEffect, useRef, useState } from 'react';

const useCountdownTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startCountdown = useCallback(() => {
    console.log('starting timer...');
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetCountDown = useCallback(() => {
    console.log('resetting timer...');

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log('clearing timer...');
      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountdown, resetCountDown };
};

export default useCountdownTimer;
