import { PropsWithChildren } from 'react';

export const CustomBackground = ({children}: PropsWithChildren) => {
  return (
    <div className="custom-background h-full">
      {children}
    </div>
  );
};
