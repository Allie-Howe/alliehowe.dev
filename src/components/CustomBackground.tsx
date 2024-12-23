import { useBackgroundContext } from '../backgrounds/BackgroundContext';
import { Checkers } from '../backgrounds/Checkers';
import { CirclesAndLines } from '../backgrounds/CirclesAndLines';
import { ContrastingCircles } from '../backgrounds/ContrastingCircles';
import { GameOfLife } from '../backgrounds/GameOfLife';
import { Love } from '../backgrounds/Love';
import { PlainBlack } from '../backgrounds/Plains';
import { RotatingPlus } from '../backgrounds/RotatingPlus';
import { RotatingTriangles } from '../backgrounds/RotatingTriangles';
import { SquareCircle } from '../backgrounds/SquareCircle';
import { TwinCircles } from '../backgrounds/TwinCircles';

export const backgroundMap = [
  PlainBlack,
  GameOfLife,
  TwinCircles,
  SquareCircle,
  ContrastingCircles,
  Checkers,
  CirclesAndLines,
  Love,
  RotatingPlus,
  RotatingTriangles,
  // If we're gonna use this, we need the text to change dynamically - maybe use context to store index & other data?
  // PastelRainbow,
]

export const CustomBackground = () => {
  const {backgroundIndex, zenMode} = useBackgroundContext();

  const CurrentComponent = backgroundMap[backgroundIndex];

  return (
    <div className="h-full w-full absolute" style={{filter: zenMode ? undefined : 'blur(2px)'}}>
      <CurrentComponent />
    </div>
  );
};
