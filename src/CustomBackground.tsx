import { GameOfLife } from './p5scripts/GameOfLife';

export const backgroundMap = [
  GameOfLife,
  () => <p className='text-5xl'>hello</p>,
  () => <p className='text-5xl'>goodbye</p>,
]

interface CustomBackgroundProps {
  backgroundIndex: number
}
export const CustomBackground = ({ backgroundIndex }: CustomBackgroundProps) => {
  const CurrentComponent = backgroundMap[backgroundIndex];

  return (
    <div className="custom-background absolute blur-sm">
      <CurrentComponent />
    </div>
  );
};
