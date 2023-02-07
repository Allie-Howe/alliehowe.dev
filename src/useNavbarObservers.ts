import { useRef, useEffect, useState } from 'react';

const splashOptions = { rootMargin: "-100px 0px 0px 0px" };

export const useNavbarObservers = () => {
  const splashRef = useRef<HTMLDivElement>();
  const topRef = useRef<HTMLDivElement>();
  const [position, setPosition] = useState('top');

  useEffect(() => {
    new IntersectionObserver(([entry]) => {
      setPosition(entry.isIntersecting ? 'light' : 'dark');
    }, splashOptions).observe(splashRef.current);

    new IntersectionObserver(([entry]) => {
      setPosition(entry.isIntersecting ? 'top' : 'light');
    }).observe(topRef.current);
  }, [splashRef, topRef]);

  return {
    splashRef,
    topRef,
    position,
  }
}
