class box{

    constructor(x,y,width,height){

        var options = {
            friction: 0.3,
            restitution: 1.0,
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = width;
        this.height = height;

        var pos = this.body.position;
        var angle = this.body.angle;

        World.add(world, this.body);

        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();


    }
}