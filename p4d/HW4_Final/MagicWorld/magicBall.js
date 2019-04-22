class magicBall1
{
    constructor()
    {
        this.x1=-40;
        this.y1=-20;
        this.diameter1=200;
        this.angle=0;
    }

    sizeChange1()
    {
        this.diameter1=100+(sin(this.angle+PI/2)*this.diameter1)/2+this.diameter1/2;
        this.angle=this.angle+0.03;
    }
       
    drawBall1()
    {
        push();
        fill(198,164,237,90);
        noStroke();
        ellipse(this.x1,this.y1,this.diameter1);
        pop();
    }
}

class magicBall2
{
    constructor()
    {
        this.x2=1950;
        this.y2=1100;
        this.diameter2=200;
        this.angle2=0;
    }

    sizeChange2()
    {
        this.diameter2=100+(sin(this.angle2+PI/2)*this.diameter2)/2+this.diameter2/2;
        this.angle2=this.angle2+0.03;
    }
       
    drawBall2()
    {
        push();
        fill(198,164,237,60);
        noStroke();
        ellipse(this.x2,this.y2,this.diameter2);
        pop();
    }
}

class magicBall3
{
    constructor()
    {
        this.x3=-80;
        this.y3=1100;
        this.diameter3=200;
        this.angle3=0;
    }

    sizeChange3()
    {
        this.diameter3=100+(sin(this.angle3+PI)*this.diameter3)/2+this.diameter3/2;
        this.angle3=this.angle3+0.03;
    }
       
    drawBall3()
    {
        push();
        fill(198,164,237,80);
        noStroke();
        ellipse(this.x3,this.y3,this.diameter3);
        pop();
    }
}