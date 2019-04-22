let scale = 100;
let mx = [];
let my = [];

function setup() {
  createCanvas(1920, 1080);
  noStroke();
  fill(254,254,228,80);
  for (let i = 0; i < scale; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237, 34, 93);

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let track = frameCount % scale;
  mx[track] = mouseX;
  my[track] = mouseY;

  for (let i = 0; i < scale; i++) {
    // which+1 is the smallest (the oldest in the array)
    let position = (track + 1 + i) % scale;
    rectMode(CENTER);
    rect(mx[position], my[position], i, 0.2*i);
    rect(mx[position], my[position], 0.2*i, i);
    ellipse(mx[position]+10, my[position]+10, 30);
    ellipse(mx[position]-10, my[position]-10, 30);
    ellipse(mx[position]-10, my[position]+10, 30);
    ellipse(mx[position]+10, my[position]-10, 30);
  }
}