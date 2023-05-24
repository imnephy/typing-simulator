import { FC, PropsWithChildren } from 'react';

const PlaygroundWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-yellow-500 px-5 bg-white-500 max-w-screen-2xl w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default PlaygroundWrapper;
