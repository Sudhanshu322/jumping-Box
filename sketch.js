var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");



}



function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,360,30);
    surface1.shapeColor="orange"

    surface2=createSprite(290,580,200,30);
    surface2.shapeColor="blue"

    surface3=createSprite(515,580,200,30);
    surface3.shapeColor="green"

    surface4=createSprite(740,580,360,30);
    surface4.shapeColor="yellow"

    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="white"
    box.velocityX=4
    box.velocityY=9

   


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor = "orange"
    }

    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor = "blue"
    }

    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor = "green"
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor = "yellow"
    }
drawSprites();

    //add condition to check if box touching surface and make it box
}
