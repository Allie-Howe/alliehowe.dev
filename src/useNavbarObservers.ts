import { useRef, useEffect, useState, useMemo } from 'react';

const splashOptions = { rootMargin: "-100px 0px 0px 0px" };

export const useNavbarObservers = () => {
  const splashRef = useRef<HTMLDivElement>();
  const topRef = useRef<HTMLDivElement>();
  const [isTop, setIsTop] = useState(true);
  const [isSplash, setIsSplash] = useState(false);

  const position = useMemo(() => {
    if (isTop) return 'top';
    return isSplash ? 'light' : 'dark'
  }, [isTop, isSplash])

  useEffect(() => {
    new IntersectionObserver(([entry]) => {
      setIsTop(entry.isIntersecting);
    }).observe(topRef.current);

    new IntersectionObserver(([entry]) => {
      setIsSplash(entry.isIntersecting);
    }, splashOptions).observe(splashRef.current);
  }, [splashRef, topRef]);

  return {
    splashRef,
    topRef,
    position,
  }
}
