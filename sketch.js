const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var viking;
var cave;

function preload(){
cave_image = loadImage("images/cave.png");
 viking_image = loadImage("images/vikinggirl2.png");
ground_image = loadImage("images/ground.png");
}



function setup(){
    createCanvas(displayWidth,displayHeight);
    cave = createSprite(displayWidth, displayHeight);
    cave.addImage("Cave1", cave_image)
    cave.scale = 7;
    ground = createSprite(displayWidth/2, displayHeight-30, displayWidth, 20);
    ground.addImage("ground1", ground_image);
    viking = createSprite(displayWidth/2, displayHeight-100, 20, 80);
    viking.addImage("Viking1", viking_image);
    viking.scale = 0.2;

} 

function draw(){
    drawSprites();
}