class Button
{
    // Constructors can also take parameters just like other
    // functions!
    constructor(label, x, y, w, h)
    {
        this.label = label;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display()
    {
        push();
        fill(255);
        noStroke();
        rect(this.x, this.y, this.w, this.h,80);
        textSize(24);
        textFont('Georgia');
        fill(20);
        text("Love Magic",140,132);
        text("Star Magic",140,232);
        text("Threaten Magic",125,332);
        pop();
    }
    
    // Class functions can also return values!
    isMouseInButton()
    {
        if(mouseX > this.x && mouseX < this.x+this.w
          && mouseY > this.y && mouseY < this.y+this.h)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    

}