import { PropsWithChildren, useEffect, useState } from 'react';

interface PageWrapperProps {
  display: boolean
}
export const PageWrapper = ({ children, display }: PropsWithChildren<PageWrapperProps>) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!display) {
      setShow(false);
      return;
    }
    setTimeout(() => setShow(true), 300);
  }, [display]);

  return (
    <div style={{ opacity: show ? 1 : 0 }} className='absolute transition-all duration-500'>
      {children}
    </div>
  )
};
