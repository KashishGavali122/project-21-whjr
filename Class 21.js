var canvas;
var music;
var gr1;
var gr2;
var gr3;
var gr4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    gr1=createSprite(130,580,200,20);
gr1.shapeColor="green"
gr2=createSprite(330,580,200,20);
gr2.shapeColor="red"
gr3=createSprite(530,580,200,20);
gr3.shapeColor="yellow"
gr4=createSprite(730,580,200,20);
gr4.shapeColor="orange"

Box=createSprite(random(20,750),100,30,30);
Box.velocityY=7;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();

Box.bounceOff(edges);
if (Box.isTouching(gr1) && Box.bounceOff(gr1))
{
    Box.shapeColor="green"
}

if (Box.isTouching(gr2) && Box.bounceOff(gr2))
{
    Box.shapeColor="red"
}
if (Box.isTouching(gr3) && Box.bounceOff(gr3))
{
    Box.shapeColor="yellow"
}
if (Box.isTouching(gr4) && Box.bounceOff(gr4))
{
    Box.shapeColor="orange"
}








    //add condition to check if box touching surface and make it box
drawSprites();
}
