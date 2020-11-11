class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
         
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

    }

    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200,120,30,100); 
        image(this.sling2, 180,125,30,60);
        
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 200) {

            
            strokeWeight(8);
            stroke(48,22,8);
            line(pointA.x - 15, pointA.y + 5, pointB.x - 15, pointB.y + 8);
            line(pointA.x + 20, pointA.y + 5, pointB.x + 25, pointB.y + 8);
            image(this.sling3, pointA.x -20, pointA.y - 10, 10, 20);
            }
            else {
                strokeWeight(4);
                stroke(48,22,8);
                line(pointA.x - 15, pointA.y + 5, pointB.x - 15, pointB.y + 8);
                line(pointA.x + 20, pointA.y + 5, pointB.x + 25, pointB.y + 8);
                image(this.sling3, pointA.x +20, pointA.y - 10, 10, 20);  
            }
        }
    }
    
}