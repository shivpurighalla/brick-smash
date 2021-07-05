class  Drop{
    constructor(x,y){
        var options = { friction: 0.001, restitution:0.1 }
        this.rain = Bodies.circle(x,y,5,options); 
        this.radius = 7; 
        World.add(world, this.rain);
    }
    display(){
        fill ("blue");
        ellipseMode("RADIUS");
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}