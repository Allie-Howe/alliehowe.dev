import P5 from 'p5';
import { cols } from './shared';
import { useP5DefaultFns } from '../utils/useP5DefaultFns';
import Sketch from 'react-p5';

const NUM_TILE_WIDTH = 10
const TIMING_SPEED = 0.0002;
const PLUS_THICKNESS = 8

// TODO: This code was directly ported from old project, could clean up at some point
export const RotatingPlus = () => {
  const { setup, windowResized } = useP5DefaultFns()

  let time = 0;
  let rotation = 0;
  let windowMin: number;
  let tileSize: number;

  const draw = (p5: P5) => {
    p5.noStroke();
    p5.rectMode(p5.CENTER);
    p5.translate(tileSize/2, tileSize/2)

    windowMin = Math.max(p5.windowHeight, p5.windowWidth);
    windowMin = windowMin % 2 ? windowMin - 1 : windowMin;
    tileSize = windowMin/NUM_TILE_WIDTH;

    time = (TIMING_SPEED*p5.millis())%1;
    rotation = p5.map(time, 0, 1, -.5, .5)

    time > 0.5 ? doPlusses(p5) : doSquares(p5);
  }

  function doPlusses(p5: P5) {
    p5.background(cols.dark);
    p5.fill(cols.light);

    doGrid(p5, 0, drawPlus);
  }

  function doSquares(p5: P5) {
    p5.background(cols.light);
    p5.fill(cols.dark);

    doGrid(p5, .5, drawSquare);
  }

  function doGrid(p5: P5, offset: number, drawItem: (p5: P5) => void) {
  for (let i = 0-offset; i < NUM_TILE_WIDTH; i++) {
      for (let j = 0-offset; j < NUM_TILE_WIDTH; j++) {
        p5.push();
        p5.translate(i*tileSize, j*tileSize)
        p5.rotate(p5.PI * time)
        drawItem(p5);
        p5.pop();
      }
    }
  }

  function drawPlus(p5: P5) {
    p5.rect(0,0,tileSize/PLUS_THICKNESS, tileSize);
    p5.rect(0,0,tileSize, tileSize/PLUS_THICKNESS);
  }

  function drawSquare(p5: P5) {
    p5.square(0,0,tileSize*((PLUS_THICKNESS-1)/PLUS_THICKNESS));
  }
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
