import Sketch from "react-p5";
import p5 from "p5"; //Import this for typechecking and intellisense
import { useP5DupeRemover } from './p5DupeRemover';
import { useGameOfLife } from './p5scripts/gameOfLife';

type DrawFn = () => (p5: p5) => void
const scriptsMap: DrawFn[]  = [
  useGameOfLife
];

export const CustomBackground = () => {
  const setParent = useP5DupeRemover();
  const drawFns = scriptsMap.map((script) => script());

  const setup = (p5: p5, canvasParentRef: Element) => {
    setParent(canvasParentRef);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);
    p5.noStroke();
    p5.pixelDensity(1);
  };

  const windowResized = (p5: p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const draw = (p5: p5) => {
    drawFns[0](p5);
  };

  return (
    <div style={{filter: 'blur(3px)'}} className="custom-background absolute">
      <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
    </div>
  );
};
