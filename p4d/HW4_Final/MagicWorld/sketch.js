//Start animation
var myMagicBall1;
var myMagicBall2;
var myMagicBall3;
//heart magic
var myHearts = [];
var numHearts;
//threaten magic
var ghostW = 0;
var ghostH = 0;
//star
let scale = 100;
let mx = [];
let my = [];
//button
var b1;
var b2;
var b3;
//buttons switch
var animation = 1;
var selectVal = 0;

function setup() {
    createCanvas(1920, 1080);
    //button for magic
    b1 = new Button("Button 1", 80, 100, 250, 50);
    b2 = new Button("Button 2", 80, 200, 250, 50);
    b3 = new Button("Button 3", 80, 300, 250, 50);
    //ball animation
    myMagicBall1 = new magicBall1();
    myMagicBall2 = new magicBall2();
    myMagicBall3 = new magicBall3();
    //Heart animation
    numHearts = 200;
    for(var n=0;n < numHearts;n++)
        {
            myHearts[n] = new love();
        }
    //Star effect
    fill(254,254,228,80);
    for (var i = 0; i < scale; i++) {
    mx.push(i);
    my.push(i);
  }
}


function draw() {

    switch(selectVal) {
        case 0: 
                break;
        case 1: background(245,228,228);
                drawLoveMagic();
                break;
        case 2: background(53,33,86);
                drawStarMagic();
                break;
        case 3: background(24,33,48);
                drawThreatenMagic();
                break;
    }

  //show the mainpage
      b1.display();
      b2.display();
      b3.display();
      drawBody();
      drawHands();
    
   //show the bubble animation in 1st page
  if (animation == 1){
    
      background(195,214,255);
      myMagicBall1.sizeChange1();
      myMagicBall1.drawBall1();
      myMagicBall2.sizeChange2();
      myMagicBall2.drawBall2();
      myMagicBall3.sizeChange3();
      myMagicBall3.drawBall3();
      textTran = 255;
      }
    //Title
    fill(255,255,255,textTran);
    textFont('Geogia');
    textSize(160);
    text('Magic World',470,540);
    textSize(60);
    text("Press S button to start",600,731);
}

function keyPressed() {
//press any button to start
    if(key == 's'){
    animation = 0;
    textTran = 0;
    //Cover the text
    fill(195,214,255);
    textFont('Geogia');
    textSize(160);
    text('Magic World',470,540);
    textSize(60);
    text("Press S button to start",600,731);
}
        if(key == 'e')
    {
        selectVal = 0;    
    }
    }




function doubleClicked()
{
    if(b1.isMouseInButton())
        {
            selectVal = 1;
        }
    
   else if(b2.isMouseInButton())
        {
            selectVal = 2;
        }
    
    else if(b3.isMouseInButton())
        {  
            selectVal = 3;
        }
}


//draw the bubble effect
function mouseDragged(){
    var colorR = random(20,200);
    var bSize = random (5,20);
    fill(colorR,55,200);
    ellipse(mouseX, mouseY, bSize, bSize);
    // prevent default
    return false;
}


function drawLoveMagic(){
    //heart move *problem
      for(var n=0; n<numHearts;n++)
      {
          myHearts[n].moveHeart();
          myHearts[n].displayHeart();
      }
}

function drawStarMagic(){
    // Cycle through the array, using a different entry on each frame.
    // Using modulo (%) like this is faster than moving all the values over.
    var track = frameCount % scale;
    drawHands(mouseX-1400,mouseY-600);
    mx[track] = mouseX;
    my[track] = mouseY;
    for (var i = 0; i < scale; i++) {
        // which+1 is the smallest (the oldest in the array)
        var position = (track + 1 + i) % scale;
        push();
        fill(245,238,119,60);
        rectMode(CENTER);
        rect(mx[position], my[position], i, 0.05*i);
        rect(mx[position], my[position], 0.05*i, i);
        pop();
        fill(245,238,119,60);
        ellipse(mx[position]+2, my[position]+2, 10);
        ellipse(mx[position]-2, my[position]-2, 10);
        ellipse(mx[position]-2, my[position]+2, 10);
        ellipse(mx[position]+2, my[position]-2, 10);
        
        }
}

function drawThreatenMagic(){
  drawGhost(ghostW+800,ghostH+400);
  randomX = random(-1200,800);
  randomY = random(-500,1900);
    //mouse position
  if (
    mouseX >= ghostW+800 &&
    mouseX <= ghostW + 1020 &&
    mouseY >= ghostH+400 &&
    mouseY <= ghostH + 800
  ) {
    ghostW += random(-20, 20);
    ghostH += random(-20, 20);
    
    for(var c = 0; c < 15;c++){
    drawGhost(ghostW+randomX,ghostH+randomY);

  }
      //magic light
      fill(255,249,128,80);
      ellipse(mouseX,mouseY,120,120);
      ellipse(1350,580,250,250);//light

  }
}

//Draw the wizard's body
function drawBody(){
  noStroke();
  //Draw shoose
  fill(55,18,16);
  ellipse(1557,1009,56,56);
  rect(1557,961,28,47);
  ellipse(1669,1009,56,56);
  rect(1641,961,28,47);  
  //Draw cloth
  fill(77,78,180);
  quad(1483,963,1532,764,1682,764,1731,963);
  fill(188,200,180);
  rect(1483,943,250,20);
  //Draw ears
  fill(221,188,179);
  ellipse(1488,680,55,55);
  ellipse(1710,680,55,55);
  //Draw face
  fill(250,203,188);
  ellipse(1600,680,230,230);
  ellipse(1740,864,55,55);
  //Draw eyes
  fill(255);
  ellipse(1564,672,48,48);
  ellipse(1638,672,48,48);
  fill(0);
  ellipse(1554,672,23,23);
  ellipse(1630,672,23,23);
  beginShape();
  //Draw mustache
  fill(230);
  ellipse(1606,778,153,153);
  triangle(1537,812,1675,812,1606,900);
  //Draw nose and mouse
  fill(239,158,137);
  ellipse(1603,715,31,31);
  triangle(1588,710,1618,710,1603,682);
  ellipse(1602,752,18,13); //mouse
  //Draw Hat
  fill(77,78,180);
  vertex(1473,625);
  vertex(1531,586);
  vertex(1620,444);
  vertex(1740,580);
  vertex(1650,530);
  vertex(1672,587);
  vertex(1735,625);
  endShape(CLOSE);
  fill(188,200,180);//highlignt
  rect(1530,570,143,20);  
}

//Draw hands
function drawHands(x,y){
  push();
  translate(x, y);
  fill(250,203,188);
  ellipse(1436,848,56,56);
  ellipse(1408,834,24,24);
  //wand
  fill(84,0,79);
  quad(1394,744,1403,741,1431,824,1417,828);
  fill(161,77,0);
  quad(1349,587,1352,586,1401,742,1395,743);
  fill(240,1480,50,20);
  ellipse(1350,580,80,80);//light
    
  pop();
}

//Draw a gost for the threaten magic
function drawGhost(x,y){
  push();
  translate(x, y);
  fill(240);
  noStroke();
  ellipse(116,116,227,227);
  beginShape();
  curveVertex(5,116);
  curveVertex(5,116);
  curveVertex(47, 345);
  curveVertex(113, 315);
  curveVertex(183, 345);
  curveVertex(227, 316);
  curveVertex(227, 116);
  curveVertex(227, 116);
  endShape();
  fill(20);
  ellipse(77,96,17,17);
  ellipse(155,96,17,17);
  arc(115, 152, 55, 55, PI, 0);
  pop();
}