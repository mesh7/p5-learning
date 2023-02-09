// create outlineShape function
// draw ellipse
// add random weight and color
// add hexagon

const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
  createCanvas(530, 530, SVG);

  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152), // blue
  ];

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
    testLines()
    outlineShape()
    simpleLines()
  circle();
}

function simpleLines() {
  const stepsOut = 8;
  const numSteps = randomSelectTwo ? stepsOut : int(stepsOut * 1.25);
  // Calculating number of steps
  const step = CRYSTAL_SIZE / 2 / numSteps;
  const start = floor(random(0, numSteps));
  const stop = floor(random(start, numSteps + 1));

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;

  const angle = 360 / numShapes;

  noFill();
  stroke(strokeColor);
  strokeWeight(weight);
  // push and pop isolate the state

  // Everything above the push is tyhe initial state and everything defined after (wihtin one push pop scope)
  // will effect only that particular scope

  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0);
    rotate(angle);
  }
  pop();
}

// Drawing the outer lines of the pattern
function outlineShape() {
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  const hexagonTrue = randomSelectTwo();

  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width / 2, height / 2);
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2);
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  }
  pop();
}

// Drawing circles on the test-lines
function circle() {
  const numShapes = SIDES;
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  circleSize = (CRYSTAL_SIZE / 2) * 0.93;
  const position = (CRYSTAL_SIZE / 2) - (circleSize / 2);

  noFill();
  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width / 2, height / 2);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    ellipse(position, 0, circleSize, circleSize);
    rotate(angle);
  }
  pop();
}

// Drawing inner lines of pattern
function testLines() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  const strokeColor = getRandomFromPalette();

  noFill();
  stroke(PALETTE[0]);
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

  stroke(strokeColor);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, 0, CRYSTAL_SIZE / 2);
    rotate(angle);
  }
  pop();
}
