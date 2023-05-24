import { FC } from 'react';

interface GeneratedTextProps {
  text: string;
}

const GeneratedText: FC<GeneratedTextProps> = ({ text }) => {
  return <div className="text-slate-500">{text}</div>;
};

export default GeneratedText;
