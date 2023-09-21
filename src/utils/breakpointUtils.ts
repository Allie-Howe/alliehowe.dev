import { useEffect, useState } from 'react';

export const tailwindBreakpoints = {
  ['sm']: '640px',
  ['md']: '768px',
  ['lg']: '1024px',
  ['xl']: '1280px',
  ['2xl']: '1536px'
};

export const getCurrentBreakpoints = () => {
  const width: number = window.innerWidth;
  return {
    xs: width < 640,
    sm: width >= 640,
    md: width >= 768,
    lg: width >= 1024,
    xl: width >= 1280,
    '2xl': width >= 1536
  };
}

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(getCurrentBreakpoints());

  useEffect(() => {
    const handleWindowResize = () => setBreakpoints(getCurrentBreakpoints());

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return breakpoints;
}
