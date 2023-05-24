import { FC } from 'react';

interface CountdownTimerProps {
  timeLeft: number;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ timeLeft }) => {
  return <div className="text-left w-full">Time left: {timeLeft}</div>;
};

export default CountdownTimer;
