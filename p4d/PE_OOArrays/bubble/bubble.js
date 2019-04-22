class bubble
{
    constructor()
    {
        // Create a new bubble with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random(20,50);
        this.speed = random(2,4);
        this.bubbleColor = color(random(0,255),random(0,255),random(0,255));
    }

    move()
    {
        // Move down based on the speed
        this.y = this.y - this.speed;
        if(this.y<0)
    {
        this.y=height;    
    }
    }
       
    display()
    {
        push();
        fill(this.bubbleColor);
        noStroke();
        ellipse(this.x,this.y,this.size);
        pop();
    }
}
