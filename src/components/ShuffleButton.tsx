import ShuffleVariantIcon from 'mdi-react/ShuffleVariantIcon';
import { useState } from 'react';
import { backgroundMap } from './CustomBackground';
import { useBackgroundContext } from '../backgrounds/BackgroundContext';
import { MdiReactIconComponentType } from 'mdi-react';
import { PressableButton } from './PressableButton';

export const pinks = [
  '#f9a8d5', // Hex version of Tailwind color
  '#d98db6',
  ];

export const ShuffleButton = () => {
  const {setBackgroundIndex} = useBackgroundContext();
  const [glowing, setGlowing] = useState('glowing');

  return <PressableButton
    icon={<ShuffleVariantIcon size='3em'/>}
    className={`h-20 ${glowing}`}
    onClick={() => {
      setBackgroundIndex(i => (i + 1) % backgroundMap.length)
      setGlowing('');
    }}
  />
};
