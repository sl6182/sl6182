var myBall;

function setup() {
    createCanvas(400, 400);
    
    myBall = new ball();
  
    console.log(myBall);

}

function draw() {
  background(220);
  
  myBall.move();
  myBall.bounce();
  myBall.display();
}


