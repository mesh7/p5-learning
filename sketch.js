const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
  createCanvas(550, 550, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152)
  ];
}

function draw() {
  testLines();
}

function testLines() {
  let numShapes = randomizer() ? SIDES : SIDES * 2;
  const strokeColor = getRandomPalette();
 
  noFill();
  push();
    translate(width / 2, height / 2);
    stroke(PALETTE[0]);
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

    stroke(strokeColor);
    const angle = 360 / numShapes;
    for (let i = 0; i < numShapes; i++) {
        line(0, 0, 0, CRYSTAL_SIZE / 2);
        rotate(angle);
    }
  pop();
}

function randomizer() {
  const rando = random(1);
  if (rando > 0.5) {
    return true;
  } else {
    return false;
  }
}

function getRandomPalette() {
  const randoTwo = floor(random(0, PALETTE.length));
  return PALETTE[randoTwo];

}
