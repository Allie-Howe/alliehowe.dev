import { PropsWithChildren, useEffect, useState } from 'react';
import { defaultTransition } from '../App';

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
    <div style={{ opacity: show ? 1 : 0 }} className={`${defaultTransition} absolute`}>
      {children}
    </div>
  )
};
