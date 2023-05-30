import { Snake } from './snake.js'
import { Cherry } from './cherry.js'

/* SNAKEGAME */
let snake, cherry;
let sec;
let NextIns, GameOver;

function setup() {
  createCanvas(500, 500);
  background(200);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(60);

  snake = new Snake();
  cherry = new Cherry();
}

function draw() {
  if (second() !== sec && !GameOver) {
    background(200);

    snake.step();
    snake.draw();
    cherry.draw();
    GameOver = snake.detectColl();

    sec = second();
  } else if (GameOver) {
    isGameOver();
  }
}

function isGameOver() {
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);
  translate(width / 2, height / 2);
  fill(255, 0, 0);
  text('GAME OVER', 0, 0);
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      NextIns = 'u';
      break;
    case DOWN_ARROW:
      NextIns = 'd';
      break;
    case LEFT_ARROW:
      NextIns = 'l';
      break;
    case RIGHT_ARROW:
      NextIns = 'r';
      break;
    default:
      break;
  }
}
