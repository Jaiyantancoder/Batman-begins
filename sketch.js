//Constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//Variables
var thunder1,thunder2,thunder3,thunder4;
var Walkinganimation;
var engine, world;
var boy,rain,ground;
var bg;
var thunder;

function preload(){
 
//Loading images  
bg  =  loadImage("rainbg.jpg");  
thunder1 = loadImage("thunderbolt/1.png");
thunder2 = loadImage("thunderbolt/1.png");
thunder3 = loadImage("thunderbolt/1.png");
thunder4 = loadImage("thunderbolt/1.png");

//Loading animations
Walkinganimation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_1.png","Walking Frame/walking_1.png","Walking Frame/walking_1.png",
"Walking Frame/walking_1.png","Walking Frame/walking_1.png","Walking Frame/walking_1.png");
}

function setup(){
//Creating canvas
var canvas = createCanvas(750,500);

//Declaring engine and world
engine = Engine.create();
world = engine.world;
   
//Creating objects here
ground = new Ground(375,495,1500,5);
boy = new Boy(375,480,20,30);  

}

function draw(){

//Background    
background(bg);

//Updating engine
Engine.update(engine);

for(var i=0; i<100; i++){

rain = new Rain(random(0,750),random(0,100),7);    

}

//displaying the objects
ground.display();
boy.display();
rain.display();
                 
}   

