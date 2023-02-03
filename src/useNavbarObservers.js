import { createRef, useEffect, useState } from 'react';

const splashOptions = { rootMargin: "-100px 0px 0px 0px" };

export const useNavbarObservers = () => {
  const splashRef = createRef();
  const topRef = createRef();
  const [position, setPosition] = useState('top');

  useEffect(() => {
    const splashObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setPosition(entry.isIntersecting ? 'light' : 'dark');
      });
    }, splashOptions);
    if (splashRef.current) {
      splashObs.observe(splashRef.current);
    }
  }, [splashRef]);

  useEffect(() => {
    const topObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setPosition(entry.isIntersecting ? 'top' : 'light');
      });
    });
    if (topRef.current) {
      topObs.observe(topRef.current);
    }
  }, [topRef]);

  return {
    splashRef,
    topRef,
    position,
  }
}
