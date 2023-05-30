import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setNewRecord } from '@/features/leaderboard/sessionTopSlice';
import { calculateAccuracyPercentage, countErrors } from '@/utils/helpers';
import useText from './useText';
import useCountdownTimer from './useCountdownTimer';
import useTypings from './useTypings';

export type PhaseState = 'start' | 'run' | 'finish';

const COUNTDOWN_SECONDS = 60;

const useEngine = () => {
  const dispatch = useDispatch();
  const sessionTop = useSelector((state: RootState) => state.sessionTop.value);

  const [phase, setPhase] = useState<PhaseState>('start');
  const { currentText, updateText, fetchTextFromApi, isLoading } = useText();
  const { timeLeft, startCountdown, resetCountDown } = useCountdownTimer(COUNTDOWN_SECONDS);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(phase !== 'finish');

  const [errors, setErrors] = useState(0);
  const [pb, setPb] = useState('');

  const isStarting = phase === 'start' && cursor > 0;
  const isTextEnd = currentText ? cursor === currentText.length : false;

  const sumErrors = useCallback(() => {
    const textReached = currentText.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, textReached));
  }, [typed, currentText, cursor]);

  const sumRecord = useCallback(() => {
    const accuracy = calculateAccuracyPercentage(errors, totalTyped);
    const summaryCount = Math.floor(totalTyped * (100 - (errors * 100) / totalTyped));

    if (sessionTop.summaryCount < summaryCount) {
      dispatch(setNewRecord({ accuracy, errors, totalTyped, summaryCount }));
    }

    const personalBest = localStorage.getItem('pb');

    if (!personalBest || Number(personalBest) < summaryCount) {
      localStorage.setItem('pb', String(summaryCount));
      setPb(String(summaryCount));
    } else {
      setPb(personalBest);
    }
  }, [errors, totalTyped, sessionTop.summaryCount, dispatch]);

  useEffect(() => {
    if (phase === 'finish') {
      sumRecord();
    }
  }, [phase, sumRecord]);

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

  return { phase, currentText, isLoading, timeLeft, typed, errors, totalTyped, restart, pb };
};

export default useEngine;
