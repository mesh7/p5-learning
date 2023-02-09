class Layers {
  constructor() {
    this.sides = SIDES;
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 2;
    this.thickStroke = 4;
    this.strokeColor = getRandomFromPalette();
  }
}

class Circles extends Layers {
  constructor() {
    super();
    this.circleSize = (CRYSTAL_SIZE / 2) * 0.93;
    this.position = CRYSTAL_SIZE / 2 - this.circleSize / 2;
  }

  render() {
    
    noFill();
    stroke(this.strokeColor);
    push();
    translate(width / 2, height / 2);
    const angle = 360 / this.numShapes;
    for (let i = 0; i < this.numShapes; i++) {
      ellipse(this.position, 0, this.circleSize, this.circleSize);
      rotate(angle);
    }
    pop();
  }
}