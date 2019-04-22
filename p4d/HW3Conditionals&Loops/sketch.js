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
//Prof. Erika Mesh
var laserStrokeWeight=1;//Laser's Stroke Weight
var Red=224;//Red Channel of Laser
var Green=255;//Green Channel of Laser
var Blue=0;//Blue Channel of Laser
function setup() {
  createCanvas(1024, 768);
  background(65-frameCount*0.1,133-frameCount*0.1,244-frameCount*0.1);//The Sky Will Become Dark
}

function draw() {
  background(65-frameCount*0.1,133-frameCount*0.1,244-frameCount*0.1);//The Sky Will Become Dark
  rockBlocks();//Rock Blocks
  Blocks();//Ellipse Blocks
  laser();//Laser
  spaceShip();//Spaceship
}

//Rock Blocks
function rockBlocks(){
    for(var n=0;n<5;n++)
    {
      fill(random(0,255),random(0,255),random(0,255));
      stroke(0);
      strokeWeight(10);
      rect(random(0,1024),random(0,768),20,random(0,30));
    }
}

//Ellipse Blocks
function Blocks(){
  if(keyIsPressed && key=='b')
  {
    for(var n=0;n<20;n++)
    {
      fill(random(0,255),random(0,255),random(0,255));
      stroke(0);
      strokeWeight(10);
      ellipse(random(0,1024),random(0,400),random(0,50));
    }
  }
}

//Laser
function laser(){
  if(laserStrokeWeight>40)
  {
    laserStrokeWeight=1;
  Red=224;
  Green=255;
  Blue=0;
  }
  if(keyIsPressed && key=='m')//Adjust the Width of the Laser
  {
    laserStrokeWeight++;
    Green=Green-10;
  }
  if(mouseIsPressed)//Emit the Laser
  {
    strokeWeight(laserStrokeWeight);
    stroke(Red,Green,Blue);
    line(mouseX,mouseY,mouseX,0);
  }
}

function spaceShip(){
  push();
  translate(mouseX,mouseY);
  stroke(0);
  fill(254,254,228);
  strokeWeight(5);
  triangle(-55,40,0,-40,55,40);//Chunk of the Spaceship
  if(keyIsPressed && key=='t')//Transform Into A Quad
  {
    fill(195,214,255);
    stroke(0);
    strokeWeight(8);
    quad(-55,40,-10,-40,10,-40,55,40);
  }
  rectMode(CENTER);
  fill(99,131,185);
  strokeWeight(5);
  rect(0,10,20,40,15);
  if(mouseIsPressed)//Eject Flame
  {
    fill(255,229,22);
    triangle(-25,40,-20,100,-15,40);//Left Flame
    triangle(15,40,20,100,25,40);//Right Flame
  }
  fill(252,88,55);
  rect(-20,40,10,20,2);//Left Thruster
  rect(20,40,10,20,2);//Right Thruster
  pop();
}