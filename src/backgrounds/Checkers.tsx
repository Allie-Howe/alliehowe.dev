import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DefaultFns } from '../utils/useP5DefaultFns';
import { cols } from './shared';

const NUM_SQUARES = 10;
const SPEED = 0.0002;

// TODO: This code was directly ported from old project, could clean up at some point
export const Checkers = () => {
  const {setup, windowResized} = useP5DefaultFns()

  let squareSize: number;
  let timing: number;

  const draw = (p5: p5) => {
    p5.rectMode(p5.CENTER);
    const maxSize = Math.max(p5.width, p5.height);
    squareSize = maxSize/NUM_SQUARES;
    timing = (SPEED*p5.millis())%1;

    go(p5, timing >= 0.5)
  }

  const go = (p5: p5, first: boolean) => {
    p5.fill(first ? cols.dark : cols.light);
    p5.background(first ? cols.light : cols.dark);

    for (let i = -1; i < NUM_SQUARES+2; i++) {
      for (let j = -1; j < NUM_SQUARES+2; j++) {
        p5.push();
        p5.translate(i*squareSize, j*squareSize);
        p5.rotate(timing*p5.PI);
        if ((i+j) % 2 == 0 && first) p5.rect(0, 0, squareSize, squareSize);
        if ((i+j) % 2 == 1 && !first) p5.rect(0, 0, squareSize, squareSize);
        p5.pop();
      }
    }
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
