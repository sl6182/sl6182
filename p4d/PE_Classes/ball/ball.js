class ball
{
    constructor()
    {
        // Create a new ball with a default
        // x, y, size, and speed
        this.x = 0;
        this.y = 100;
        this.size = 50;
        this.speed = 3;
    }

    move()
    {
        // Move down based on the speed
        this.x = this.x + this.speed;
    }
    
    bounce()
    {
        if(this.x>width)
      {
        this.speed=-this.speed;
      }
      else if(this.x<0)
      {
        this.speed=-this.speed;
      }
    }
    display()
    {
        push();
        fill(229,202,6);
        noStroke();
        ellipse(this.x,this.y,this.size);
        pop();
    }
}
