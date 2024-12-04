import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DefaultFns } from '../utils/useP5DefaultFns';
import { cols } from './shared';

let angle1 = 0;
let angle2 = Math.PI;

// TODO: This code was directly ported from old project, could clean up at some point
// TODO: Make this not horrific. If you're reading this, I'm sorry. This was originally written in 2019.
export const CirclesAndLines = () => {
  const { setup, windowResized } = useP5DefaultFns()

  const draw = (p5: p5) => {
    p5.translate(p5.width/2, p5.height/2);
    p5.background(cols.dark);

    const minSize = Math.min(p5.width, p5.height);

    const size = minSize/6;
    const radius = size/2;

    const diagonalLength = size*Math.sqrt(3);

    angle1 += 0.05;
    angle2 += 0.05;

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2));

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    //Adjacents
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);
    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
  }
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
