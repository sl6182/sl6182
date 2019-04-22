//love
class love
{
    constructor()
    {
        // Create a new love heart with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random(20,50);
        this.speed = random(2,4);
        this.bubbleColor = color(random(0,255),random(0,255),random(0,255));
        this.alpha = random(200, 255);
    }

    moveHeart()
    {
        // Move up based on the speed
        this.y = this.y - this.speed;
        if(this.y<0)
    {
        this.y=height;    
    }
    }
       
    displayHeart()
    {
        push();
        fill(this.alpha,0,0);
        noStroke();
        ellipse(this.x-0.4*this.size,this.y,this.size);
        ellipse(this.x+0.4*this.size,this.y,this.size);
        triangle(this.x-0.86*this.size,this.y+0.2*this.size,this.x+0.86*this.size,this.y+0.2*this.size,this.x,this.y+1.2*this.size);
        pop();
    }
    
}