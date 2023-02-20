class Layers {
  constructor() {
    this.sides = SIDES;
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 2;
    this.thickStroke = 4;
    this.strokeColor = getRandomFromPalette();
  }
}

// Drawing circles on the test-lines
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
    for (let i = 0; i < this.numShapes; i++) {
      ellipse(this.position, 0, this.circleSize, this.circleSize);
      rotate(this.angle);
    }
    pop();
  }
}

// Drawing inner lines of pattern
class SimpleLines extends Layers {
  constructor() {
    super();
    this.numSteps = randomSelectTwo ? this.stepsOut : int(this.stepsOut * 1.25);
    this.step = CRYSTAL_SIZE / 2 / this.numSteps;
    this.start = floor(random(0, this.numSteps));
    this.stop = floor(random(this.start, this.numSteps + 1));
    this.weight = randomSelectTwo() ? this.thickStroke : this.thickStroke;
  }

  render() {
    const weight = randomSelectTwo() ? 1 : 3;
    noFill();
    stroke(this.strokeColor);
    strokeWeight(weight);
    // push and pop isolate the state
    // Everything above the push is tyhe initial state and everything defined after (wihtin one push pop scope)
    // will effect only that particular scope

    push();
    translate(width / 2, height / 2);
    for (let i = 0; i < this.numShapes; i++) {
      line(this.start * this.step, 0, this.stop * this.step, 0);
      rotate(this.angle);
    }
    pop();
  }
}
