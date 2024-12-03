import p5 from 'p5';
import Sketch from 'react-p5';
import { useP5DefaultSetup } from '../utils/useP5DefaultSetup';
import { cols } from './shared';

let count = 0;

// TODO: This code was directly ported from old project, could clean up at some point
export const ContrastingCircles = () => {
  const setup = useP5DefaultSetup()

  const drawArcs = (p5: p5, radius: number) => { //draws two quarter-circles
    p5.arc(0, 0, radius, radius, 0, p5.HALF_PI);
    p5.arc(0, 0, radius, radius, p5.PI, p5.HALF_PI+p5.PI);
  }

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.light);
    p5.translate(p5.width/2, p5.height/2);
    p5.strokeWeight(4);

    //draws black rectangle on left side of screen
    p5.fill(cols.dark);
    p5.rectMode(p5.CORNERS)
    p5.rect(0, -p5.height, -p5.width/2, p5.height);
    p5.stroke(cols.light);

    const minSize = Math.min(p5.width, p5.height);

    //draws two sets of two quarter-circles, rotating in opposite directions
    p5.rotate(count);
    drawArcs(p5, minSize);
    p5.noStroke();
    p5.fill(cols.light);
    p5.rotate(-2*count);
    drawArcs(p5, minSize/2);

    count+=p5.QUARTER_PI/50;
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
