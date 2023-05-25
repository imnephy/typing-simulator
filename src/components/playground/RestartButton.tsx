import { FC, useRef } from 'react';
import { MdRefresh } from 'react-icons/md';
interface RestartButtonProps {
  onRestart: () => void;
  className?: string;
}

const RestartButton: FC<RestartButtonProps> = ({ onRestart, className }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    btnRef.current?.blur();
    onRestart();
  };
  return (
    <button ref={btnRef} onClick={handleClick} className="block rounded-full hover:bg-slate-700/30">
      <MdRefresh className={`w-10 h-10 text-red-600 ${className}`} />
    </button>
  );
};

export default RestartButton;
