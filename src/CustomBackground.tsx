import { GameOfLife } from './p5scripts/GameOfLife';

export const CustomBackground = () => {
  return (
    <div style={{filter: 'blur(3px)'}} className="custom-background absolute">
      <GameOfLife />
    </div>
  );
};
