class Ground{

    constructor(x,y,width,height){
    
    var options={
    
    'isStatic' : true,
    'friction' : 1.0,
    'density' : 2.0
    
    }
    
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos = this.body.position;    
    rectMode(CENTER);
    rect(pos.x,pos.y,width,height);

}
  }