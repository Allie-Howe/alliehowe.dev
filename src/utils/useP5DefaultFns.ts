import p5 from 'p5'
import { cols } from '../backgrounds/shared';
import { useP5DupeRemover } from './p5DupeRemover';

// TODO: Make sure this is used in all projects
export const useP5DefaultFns = () => {
const setParent = useP5DupeRemover()

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(cols.dark);
    p5.frameRate(60);
    p5.stroke(cols.light)
    p5.fill(cols.dark)
    p5.strokeWeight(3)
    p5.pixelDensity(1);
    p5.rectMode(p5.CENTER)
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return { setup, windowResized }
}
