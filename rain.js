class Rain{

constructor(x,y,radius){

var options={

'isStatic' : false,
'friction' : 1.0

}

this.body = Matter.Bodies.circle(x,y,radius,radius/2,options);
this.image = loadImage("raindrop.png");
World.add(world,this.body);

}

display(){

var pos = this.body.position;    
ellipseMode(CENTER);
ellipse(pos.x,pos.y,radius,radius/2);
imageMode(CENTER);
image(this.image,pos.x,pos.y);
    
}


}