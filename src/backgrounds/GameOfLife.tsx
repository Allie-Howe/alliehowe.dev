import p5 from 'p5';
import { useState } from 'react';
import { useP5DupeRemover } from '../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { usePrevious } from '@uidotdev/usehooks';

const TILE_SIZE = 10;

const EMPTY_PERCENTAGE = 0.6;

const cols = {
  dark: 30,
  light: 150,
}

export const GameOfLife = () => {
  const setParent = useP5DupeRemover();

  const randomiseGrid = () => new Array(gridHeight).fill(new Array(gridLength).fill(false)).map(col => col.map(() => Math.random() > EMPTY_PERCENTAGE))

  // TODO: Variable framerate
  const gridLength = Math.round(window.innerWidth/TILE_SIZE);
  const gridHeight = Math.round(window.innerHeight/TILE_SIZE);

  const [gameState, setGameState] = useState<boolean[][]>(randomiseGrid());
  const prevState = usePrevious(gameState);
  const prevPrevState = usePrevious(prevState);

  // TODO: Useeffect that expands/cuts grid to fit screen
  // TODO: Improve performance by only drawing changed tiles

  const drawGrid = (p5: p5) => {
    for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridHeight; j++) {
        p5.fill(gameState[j][i] ? cols.light : cols.dark);
        p5.square(i*TILE_SIZE, j*TILE_SIZE, TILE_SIZE);
      }
    }
  }

  const checkPrevious = () => {
    if (!prevPrevState) return;

    return gameState.every((col, i) => col.every((cell, j) => (
      cell === prevState[i][j] || cell === prevPrevState[i][j]
    )))
  }

  const updateGameState = () => {
    setGameState(gameState.map((row, y) => row.map((cell, x) => {
      const neighbours = [
        gameState[y-1]?.[x-1],
        gameState[y-1]?.[x],
        gameState[y-1]?.[x+1],
        gameState[y]?.[x-1],
        gameState[y]?.[x+1],
        gameState[y+1]?.[x-1],
        gameState[y+1]?.[x],
        gameState[y+1]?.[x+1],
      ].filter(Boolean).length;
      if (cell) {
        return neighbours === 2 || neighbours === 3;
      } else {
        return neighbours === 3;
      }
    })));
  };

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.frameRate(30);
    p5.noStroke();
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    drawGrid(p5);
    const isSame = checkPrevious();
    isSame ? setGameState(randomiseGrid()) : updateGameState();
  }

  return <div className='blur-sm'>
    <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
  </div>;
};
