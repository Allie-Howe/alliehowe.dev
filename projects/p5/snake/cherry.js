export  class Cherry {
  constructor() {
    this.XPos;
    this.YPos;
    this.move();
  }

  getX() {
    return this.XPos;
  }
  getY() {
    return this.YPos;
  }

  draw() {
    fill(150, 0, 0);
    rect(this.XPos, this.YPos, 50, 50);
  }

  move() {
    this.XPos = 50 * int(random(0, 10));
    this.YPos = 50 * int(random(0, 10));

    for (let i = 0; i < snake.getLength(); i++) {
      if (this.XPos == snake.getX(i) && this.YPos == snake.getY(i)) this.move();
    }
  }
}
