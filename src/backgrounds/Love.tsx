import P5 from 'p5';
import Sketch from 'react-p5';
import { cols } from './shared';
import { useP5DefaultFns } from '../utils/useP5DefaultFns';

const speed = 0.001;
let timing: number;
const smallRatio = 0.85

// TODO: This code was directly ported from old project, could clean up at some point
export const Love = () => {
  const { setup, windowResized } = useP5DefaultFns((p5) => p5.noStroke())

  const drawMain = (p5: P5) => p5.rect(0, 0, 1, 1);
  const drawLeft = (p5: P5) => p5.ellipse(-0.5, 0, 1, 1);
  const drawRight = (p5: P5) => p5.ellipse(0, -0.5, 1, 1);

  const drawHeart = (p5: P5) => {
    drawMain(p5);
    drawLeft(p5);
    drawRight(p5);
  }

  const draw = (p5: P5) => {
    p5.rectMode(p5.CENTER);
    p5.translate(p5.width/2, p5.height/2);
    timing = speed * p5.millis();

    const scale = timing % 1 > smallRatio ? 1.25 : 1;
    const shouldHeartBeBlack = Math.round(timing + smallRatio-0.2) % 2;

    p5.rotate(p5.QUARTER_PI);
    p5.scale(scale*(p5.height/5));

    p5.fill(shouldHeartBeBlack ? cols.dark : cols.light);
    p5.background(shouldHeartBeBlack ? cols.light : cols.dark);

    drawHeart(p5);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
