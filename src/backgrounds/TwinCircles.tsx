import p5 from 'p5';
import { useEffect, useState } from 'react';
import { useP5DupeRemover } from '../utils/p5DupeRemover';
import Sketch from 'react-p5';

interface Position {
  x: number;
  y: number;
}
let positions: Position[][] = [];
const MAX_POS = 50;

const cols = {
  dark: 30,
  light: 220,
}

export const TwinCircles = () => {
  const setParent = useP5DupeRemover();

  useEffect(() => {
    positions = [];
  }, []);

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.frameRate(60);
    p5.noStroke();
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    p5.background(cols.dark);
    p5.translate(p5.windowWidth/2, p5.windowHeight/2);

    const normalisers = {
      width: p5.windowWidth/3,
      height: p5.windowHeight/3,
      speed: 0.4e-3,
    }

    positions.push([
      {x: p5.sin(2*p5.millis()*normalisers.speed)*normalisers.width, y: p5.cos(p5.millis()*normalisers.speed)*normalisers.height},
      {x: -p5.sin(2*p5.millis()*normalisers.speed)*normalisers.width, y: -p5.cos(p5.millis()*normalisers.speed)*normalisers.height},
    ]);

    if (positions.length > MAX_POS) {
       positions.shift();
    }

    positions.forEach((mp, i) => {
      p5.fill(cols.light, p5.map(i, 0, MAX_POS, 0, 200));

      mp.forEach((_, index) => (
        p5.ellipse(positions[i][index].x, positions[i][index].y, i, i)
      ))
    });
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};
