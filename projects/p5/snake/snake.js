import { Cherry as cherry } from './cherry.js'

let GRID_SIZE = 10;

export class Snake {
  constructor() {
    this.length = 2;
    this.X = new Array(this.length);
    this.Y = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
      this.X[i] = 200;
      this.Y[i] = 200 + i * 50;
    }
  }

  step() {
    for (let i = this.length - 1; i > 0; i--) {
      this.X[i] = this.X[i - 1];
      this.Y[i] = this.Y[i - 1];
    }

    switch (NextIns) {
      case 'u':
        this.Y[0] -= 50;
        break;
      case 'd':
        this.Y[0] += 50;
        break;
      case 'l':
        this.X[0] -= 50;
        break;
      case 'r':
        this.X[0] += 50;
        break;
      default:
        break;
    }

    if (
      this.X[0] == cherry.getX && this.Y[0] == cherry.getY ? true : false
    ) {
      this.grow();
      cherry.move();
    }
  }

  draw() {
    let colour = 0;
    for (let i = 0; i < this.length; i++) {
      fill(colour);
      colour += 255 / this.length;
      rect(this.X[i], this.Y[i], 50, 50);
    }
  }

  grow() {
    this.X.push(this.X[this.length - 1]);
    this.Y.push(this.Y[this.length - 1]);
    this.length++;
  }

  detectCollision() {
    if (!NextIns) return;

    // Borders
    // console.log(`X:${this.X}, Y:${this.Y}`);
    if (
      this.X[0] < 0 ||
      this.X[0] == GRID_SIZE * 50 ||
      this.Y[0] < 0 ||
      this.Y[0] == GRID_SIZE * 50
    ) {
      return true;
    }

    for (let i = 1; i < this.length; i++) {
      console.log(`X:${this.X[i]}, Y:${this.Y[i]}`);
      if (this.X[i] === this.X[0] && this.Y[i] === this.Y[0]) {
        return true;
      }
    }
    return false;
  }

  getLength() {
    return this.length;
  }
  getX(val) {
    return this.X[val];
  }
  getY(val) {
    return this.Y[val];
  }
}
