import p5 from 'p5';
import { useP5DupeRemover } from '../utils/p5DupeRemover';
import Sketch from 'react-p5';
import { cols } from './shared';

let shouldRotate = true;
const SHOULD_TOGGLE_ROTATION = false


const ROTATION_SPEED = Math.PI/(250*2)
// TODO: Rename
const NEW_SPEED = 5e-4/2
const NUM_REPETITIONS = 5
const LINE_SIZE = 80
const NUM_LINES = 8

export const Tmp = () => {
  const setParent = useP5DupeRemover();
  let rotation = 1;


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

    const timing = (NEW_SPEED*p5.millis())%1;

    if (shouldRotate && timing < 0.7) rotation += ROTATION_SPEED;

    for (let j = 1; j < NUM_REPETITIONS; j++) {
      const isEven = j % 2;
      const rotationDirection = isEven ? -1 : 1;
      const rotationOffset = (6*p5.PI)/500
      const power = 2 ** j;


      p5.push();
      if (isEven) p5.rotate(rotationOffset)
      for (let i = 0; i < NUM_LINES * power; i++) {
        const thisRotation = rotation + ((i * p5.TWO_PI / power) / NUM_LINES);
        p5.push()
        p5.rotate((rotationDirection * thisRotation) - rotationOffset )
        p5.translate(LINE_SIZE * j, 0)
        p5.line(0, 0, LINE_SIZE, 0)
        p5.pop()
      }
      p5.pop();
    }
  }

  const keyPressed = (p5: p5, e: KeyboardEvent) => {
    if (!SHOULD_TOGGLE_ROTATION || e.code !== 'Space') return;
    shouldRotate = !shouldRotate;
  }

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} windowResized={windowResized}/>;
};
