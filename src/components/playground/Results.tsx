import { PhaseState } from '@/hooks/useEngine';
import { formatPercentage } from '@/utils/helpers';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import RestartButton from './RestartButton';

interface ResultsProps {
  errors: number;
  accuracy: number;
  total: number;
  phase: PhaseState;
  onRestart: () => void;
}

const Results: FC<ResultsProps> = ({ errors, accuracy, total, phase, onRestart }) => {
  if (phase !== 'finish') {
    return null;
  }
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };
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
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 2 }}
        className="flex justify-center"
      >
        <RestartButton onRestart={onRestart} />
      </motion.li>
    </motion.ul>
  );
};

export default Results;
