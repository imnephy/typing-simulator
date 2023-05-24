import { FC, PropsWithChildren } from 'react';

const TextWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative text-2xl max-w-4xl leading-relaxed break-all mt-3 whitespace-normal">
      {children}
    </div>
  );
};

export default TextWrapper;
