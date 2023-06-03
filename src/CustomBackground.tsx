import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { useP5DupeRemover } from './p5DupeRemover';

export const CustomBackground = () => {
  const setParent = useP5DupeRemover();

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5Types) => {
    p5.background(30);
    p5.stroke(255);
    p5.strokeWeight(2);
    for (let i = 0; i < 100; i++) {
      p5.point(p5.random(0, p5.width), p5.random(0, p5.height));
    }
  };

  return (
    <div className="custom-background absolute">
      <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
    </div>
  );
};
