import p5 from 'p5';
import { useP5DupeRemover } from './utils/p5DupeRemover';
import Sketch from 'react-p5';
import { cols } from './backgrounds/shared';

let SHOULD_ROTATE = false;

const ROTATION_SPEED = 2e-4
const NUM_REPETITIONS = 5
const LINE_SIZE = 80
const NUM_LINES = 8

export const Tmp = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.stroke(cols.light)
    p5.strokeWeight(3)
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2)
    p5.rotate((3*p5.PI)/16)
    const rotation = SHOULD_ROTATE ? p5.millis() * ROTATION_SPEED : 1

    for (let j = 0; j < NUM_REPETITIONS; j++) {
      const rotationDirection = j % 2 && SHOULD_ROTATE ? -1 : 1;
      const power = 2 ** j;


      for (let i = 0; i < NUM_LINES * power; i++) {
        const thisRotation = rotation + ((i * p5.TWO_PI / power) / NUM_LINES);
        p5.push()
        p5.rotate(rotationDirection * thisRotation)
        p5.translate(LINE_SIZE * j, 0)
        p5.line(0, 0, LINE_SIZE, 0)
        p5.pop()
      }
    }
  }

  const keyPressed = (p5: p5, e: KeyboardEvent) => {
    if (e.code !== 'Space') return;
    SHOULD_ROTATE = SHOULD_ROTATE ? false : true;
  }

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} windowResized={windowResized}/>;
};
