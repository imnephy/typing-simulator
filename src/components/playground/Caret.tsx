import { FC } from 'react';

interface CaretProps {
  char: string;
}

const Caret: FC<CaretProps> = ({ char }) => {
  const isSpace = char === ' ';
  return (
    <span className={`inline-block bg-blue-500 ${isSpace ? 'w-2 h-7' : ' w-fit'}`}>{char}</span>
  );
};

export default Caret;
