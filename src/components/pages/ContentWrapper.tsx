import { PropsWithChildren } from 'react';

export const ContentWrapper = ({ children, text }: PropsWithChildren<{text: string}>) => {
  return (
    <div className='flex flex-col items-center mt-5 overflow-scroll p-5 max-h-[75dvh]' style={{minWidth: 'min(100dvw, 56rem)'}}>
      <p className='text-4xl text-center mb-5'>{text}</p>
      <div className='flex flex-col max-w-[56rem] items-center justify-center flex-1 gap-2'>
        {children}
      </div>
    </div>
  );
}
