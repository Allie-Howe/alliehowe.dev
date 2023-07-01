import { GameOfLife } from '../backgrounds/GameOfLife';
import { PlainBlack, PlainPink } from '../backgrounds/Plains';
import { TwinCircles } from '../backgrounds/TwinCircles';

export const backgroundMap = [
  PlainBlack,
  GameOfLife,
  TwinCircles,
  PlainPink,
  // If we're gonna use this, we need the text to change dynamically - maybe use context to store index & other data?
  // PastelRainbow,
]

interface CustomBackgroundProps {
  backgroundIndex: number
}
export const CustomBackground = ({ backgroundIndex }: CustomBackgroundProps) => {
  const CurrentComponent = backgroundMap[backgroundIndex];

  return (
    <div className="h-full w-full absolute blur-sm">
      <CurrentComponent />
    </div>
  );
};
