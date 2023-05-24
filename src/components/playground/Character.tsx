import { FC } from 'react';

interface CharacterProps {
  actual: string;
  expected: string;
}

const Character: FC<CharacterProps> = ({ actual, expected }) => {
  const isCorrect = actual === expected;
  const isSpace = expected === ' ';
  return (
    <span
      className={`${isCorrect && !isSpace ? 'text-green-700' : ''}
      ${!isCorrect && !isSpace ? 'text-red-500' : ''}
      ${!isCorrect && isSpace ? 'bg-red-500/50' : ''}
  `}
    >
      {expected}
    </span>
  );
};

export default Character;
