import { PropsWithChildren } from 'react';

export const CustomBackground = ({children}: PropsWithChildren) => {
  return (
    <div className="custom-background h-full flex items-center justify-center flex-col">
      {children}
    </div>
  );
};
