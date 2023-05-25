import { FC, PropsWithChildren } from 'react';

interface PlaygroundWrapperProps {
  isLoading: boolean;
}

const PlaygroundWrapper: FC<PropsWithChildren<PlaygroundWrapperProps>> = ({
  children,
  isLoading,
}) => {
  return (
    <div
      className={`px-5 mx-5 max-w-screen-2xl p-3 rounded-xl flex justify-center items-center ${
        !isLoading ? 'bg-white' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default PlaygroundWrapper;
