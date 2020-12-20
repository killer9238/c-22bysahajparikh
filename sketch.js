const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic:true
    }
  
    ground = Bodies.rectangle(200,390,400,20,options);
    World.add(world,ground);
    var optionsforball={
        restitution:0.9
    }
    ball = Bodies.circle(200,200,20,optionsforball);
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    console.log(ball);
}