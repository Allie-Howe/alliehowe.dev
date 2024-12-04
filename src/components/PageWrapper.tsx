import { PropsWithChildren, useEffect, useState } from 'react';
import { defaultTransition } from '../App';

interface PageWrapperProps {
  display: boolean
}

const TRANSITION_TIME = 300;

export const PageWrapper = ({ children, display }: PropsWithChildren<PageWrapperProps>) => {
  const [opacity, setOpacity] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!display) {
      setOpacity(0)
      setTimeout(() => setShow(false), TRANSITION_TIME);
      return;
    }
    setTimeout(() => {
      setShow(true)
      setTimeout(() => {
        setOpacity(1)
      }, 20)
    }, TRANSITION_TIME);
  }, [display]);

  return (
    <div style={{ display: show ? 'unset' : 'none', opacity }} className={`${defaultTransition}`}>
      {children}
    </div>
  )
};
