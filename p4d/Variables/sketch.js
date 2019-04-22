/**
* Shaowei Leng
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(229,255,254);
  var C=color(255,255-frameCount*0.1,255-frameCount*0.1);
  fill(C);
  stroke(0);
  strokeWeight(5);
  ellipse(250,250,frameCount*0.1);//Ellipse
  
  fill(245,238,119);
  rect(frameCount*0.1,frameCount*0.1,20,20);//Rect On the Top-Left Corner
  
  fill(245,238,119);
  rect(480-frameCount*0.1,frameCount*0.1,20,20);//Rect On the Top-Right Corner
}

 