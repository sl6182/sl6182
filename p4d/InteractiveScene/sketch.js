/**
* Shaowei Leng
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
//Homework 2 Interactive Scene
//Created By Shaowei Leng(RIT ID:sl6182)
function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(0.25*mouseX,0.25*mouseX,0.25*mouseY);//Sky
  
  fill(251,188,6);//Draw alien planets
  ellipse(0+frameCount*0.2,0+frameCount*0.5,frameCount*0.1);
  
  fill(53,168,83);
  ellipse(1024,0,frameCount*0.5);
  
  fill(252,77,101);
  ellipse(0.2+frameCount*0.2,0.2+frameCount*0.5,frameCount*0.05);
  
  fill(237,45,34);
  ellipse(mouseX,0,frameCount*0.1);
  
  fill(0,0,0);//Draw an alien planet which can move with mouseX
  ellipse(mouseX,0,frameCount*0.03);
  
  push();//Emitting a laser
  if (mouseIsPressed) {
    stroke(245,238,119);
    strokeWeight(5);
    line(mouseX, mouseY, mouseX, 0);
  }
  pop();
  
  spaceShip();//Draw a spaceship
}

//Draw a spaceship
function spaceShip(){
  push();
  translate(mouseX,mouseY);
  fill(254,254,228);
  strokeWeight(5);
  triangle(-55,40,0,-40,55,40);
  rectMode(CENTER);
  fill(99,131,185);
  strokeWeight(5);
  rect(0,10,20,40,10);
  rect(-20,40,10,20);
  rect(20,40,10,20);
  pop();
}

//Draw alien planets
function alienPlanet(Red,Green,Blue,x,y){
  push();
  translate(x,y);
  fill(Red,Green,Blue);
  ellipse(x,y,frameCount*0.1);
  pop(); 
}
//Draw an alien planet which can move with mouseX
function alienPlanetFollowMouse(Red,Green,Blue,mouseX,mouseY){
  push();
  translate(mouseX,mouseY);
  var S=frameCount*0.1
  fill(Red,Green,Blue);
  ellipse(mouseX,0,S);
  pop(); 
}