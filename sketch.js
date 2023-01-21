const CRYSTAL_SIZE = 500;
const SIDES = 6;

function setup() {
  createCanvas(550, 550, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noFill(0);
  stroke(0);
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  for (i = 0; i < 6; i++) {
    line(0, 0, 0, CRYSTAL_SIZE / 2);
  }
  pop();
}
