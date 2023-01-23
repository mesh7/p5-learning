const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
  createCanvas(550, 550, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  PALETTE = [color(255, 52, 154), color(4, 0, 152)];
}

function draw() {
  testLines();
}

function testLines() {
  noFill();
  push();
    translate(width / 2, height / 2);
    stroke(PALETTE[0]);
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    stroke(PALETTE[1]);
    const angle = 360 / SIDES;
    for (let i = 0; i < SIDES; i++) {
        line(0, 0, 0, CRYSTAL_SIZE / 2);
        rotate(angle);
    }
  pop();
}
