import { cols } from './shared';

export const PlainPink = () => {
  return <div className='bg-pink-600 w-full h-full' />
};

export const PlainBlack = () => {
  return <div className='w-full h-full' style={{backgroundColor: `rgb(${cols.dark}, ${cols.dark}, ${cols.dark})`}} />
};
