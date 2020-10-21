class Drops {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.001
        }
        this.r = 0.1;
        this.rain = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.rain);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }

    }
    display() {
            fill("skyblue")
            ellipseMode(CENTER);
            ellipse(this.rain.position.x,this.rain.position.y,this.radius/2,this.radius/2);
        
    }

}