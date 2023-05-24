import { useCallback, useEffect, useState } from 'react';
import useText from './useText';
import useCountdownTimer from './useCountdownTimer';
import useTypings from './useTypings';
import { countErrors } from '@/utils/helpers';

export type PhaseState = 'start' | 'run' | 'finish';

const COUNTDOWN_SECONDS = 5;

const useEngine = () => {
  const [phase, setPhase] = useState<PhaseState>('start');
  const { currentText, updateText, fetchTextFromApi, isLoading } = useText();
  const { timeLeft, startCountdown, resetCountDown } = useCountdownTimer(COUNTDOWN_SECONDS);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(phase !== 'finish');

  const [errors, setErrors] = useState(0);

  const isStarting = phase === 'start' && cursor > 0;
  const isTextEnd = currentText ? cursor === currentText.length : false;

  const sumErrors = useCallback(() => {
    const textReached = currentText.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, textReached));
  }, [typed, currentText, cursor]);

  useEffect(() => {
    if (isStarting) {
      setPhase('run');
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  useEffect(() => {
    if (!timeLeft) {
      console.log('time is up.');
      setPhase('finish');
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  useEffect(() => {
    if (isTextEnd) {
      console.log('text end...');
      sumErrors();
      updateText();
      clearTyped();
    }
  }, [cursor, currentText, clearTyped, typed, isTextEnd, updateText, sumErrors]);

  const restart = useCallback(() => {
    console.log('restarting...');
    resetCountDown();
    resetTotalTyped();
    setPhase('start');
    setErrors(0);
    fetchTextFromApi();
    clearTyped();
  }, [resetCountDown, resetTotalTyped, fetchTextFromApi, clearTyped]);

  return { phase, currentText, isLoading, timeLeft, typed, errors, totalTyped, restart };
};

export default useEngine;
