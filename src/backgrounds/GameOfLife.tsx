import p5 from 'p5';
import { useState } from 'react';
import { useP5DupeRemover } from './p5DupeRemover';
import Sketch from 'react-p5';

const TILE_SIZE = 10;

const cols = {
  dark: 30,
  light: 150,
}

export const GameOfLife = () => {
  const setParent = useP5DupeRemover();

  // TODO: Variable framerate
  const gridLength = Math.round(window.innerWidth/TILE_SIZE);
  const gridHeight = Math.round(window.innerHeight/TILE_SIZE);

  const [gameState, setGameState] = useState<boolean[][]>(new Array(gridHeight).fill(new Array(gridLength).fill(false)).map(col => col.map(() => Math.random() > 0.9)));

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
    updateGameState();
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};