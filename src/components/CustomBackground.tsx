import { GameOfLife } from '../backgrounds/GameOfLife';

export const backgroundMap = [
  GameOfLife,
  // PastelRainbow, // If we're gonna use this, we need the text to change dynamically
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
