import { PhaseState } from '@/hooks/useEngineOld';
import { formatPercentage } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { FC } from 'react';
import RestartButton from './RestartButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

interface ResultsProps {
  errors: number;
  accuracy: number;
  total: number;
  pb: string;
  phase: PhaseState;
  onRestart: () => void;
}

const Results: FC<ResultsProps> = ({ errors, accuracy, total, phase, onRestart, pb }) => {
  const sessionTop = useSelector((state: RootState) => state.sessionTop.value);

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (phase !== 'finish') {
    return null;
  }
  return (
    <motion.ul className="text-center">
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
        className="text-xl font-semibold"
      >
        {"Time's up"}
      </motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0.5 }}>
        Accuracy: {formatPercentage(accuracy)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
        className={`${errors ? 'text-red-500' : 'text-green-500'}`}
      >
        Errors: {errors}
      </motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>
        Typed: {total}
      </motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>
        Best score in current session: {sessionTop.summaryCount}
      </motion.li>
      {pb && (
        <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>
          Personal best: {pb}
        </motion.li>
      )}
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 2 }}
        className="flex justify-center"
      >
        <RestartButton className="spin-delay" onRestart={onRestart} />
      </motion.li>
    </motion.ul>
  );
};

export default Results;
