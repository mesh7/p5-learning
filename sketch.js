function setup() {
    createCanvas(500, 500, SVG);
    noLoop();
}

function draw() {
   background('teal');
   fill(0);
   translate(height/2, width/2);
   rect(0, 0, 25, 25);
}