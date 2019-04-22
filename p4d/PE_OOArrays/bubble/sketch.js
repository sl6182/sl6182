var myBubbles = [];
var numBubbles;

function setup() {
    createCanvas(500, 500);
    
    numBubbles = 300;
    for(var n=0;n<numBubbles;n++)
        {
            myBubbles[n] = new bubble();
        }

}

function draw() {
  background(195,214,255);
  
  for(var n=0; n<numBubbles;n++)
      {
          myBubbles[n].move();
          myBubbles[n].display();
      }
}


