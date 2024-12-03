import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DefaultSetup } from '../utils/useP5DefaultSetup';
import { cols } from './shared';

const SQUARE_SIZE = 100;
const CIRCLE_RADIUS = 200;
const NUM_TOPS = 2

const SQUARE_COUNT = Math.PI * 20
const ROTATION_OFFSET = 0.1
const ROTATION_SPEED = 1e-3;

export const SquareCircle = () => {
  const setup = useP5DefaultSetup()

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2)

    for (let i = 0; i < SQUARE_COUNT/NUM_TOPS; i++) {
      const angle = p5.map(i, 0, SQUARE_COUNT, 0, p5.TWO_PI)
      p5.push()
      p5.rotate(angle)
      for (let j = 0; j < NUM_TOPS; j++) {
        p5.rotate((p5.TWO_PI/NUM_TOPS) * j)
        p5.push()
        p5.translate(CIRCLE_RADIUS, 0)
        p5.rotate((p5.millis() * ROTATION_SPEED) + (i * ROTATION_OFFSET))
        p5.square(0,0, SQUARE_SIZE)
        p5.pop()
      }
      p5.pop()
    }
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
};
