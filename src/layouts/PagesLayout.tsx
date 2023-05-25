import React, { FC, PropsWithChildren } from 'react';

interface PagesLayoutProps {
  className?: string;
}

const PagesLayout: FC<PropsWithChildren<PagesLayoutProps>> = ({ children, className }) => {
  return (
    <div className={`flex flex-col justify-center bg-white p-4 rounded-md m-5 gap-2 ${className}`}>
      {children}
    </div>
  );
};

export default PagesLayout;
