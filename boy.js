class Boy{

constructor(x,y,width,height){

var options={

'isStatic' : true,
'density' : 1.0

}

this.body = Matter.Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);

}   

display(){

 var pos = this.body.position;
 rectMode(CENTER);
 rect(pos.x,pos.y,this.width,this.height);   
    
}


}