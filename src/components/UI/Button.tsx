import React, { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-green-500 text-white py-2 px-3 rounded-md hover:bg-green-500/90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
