var bar;
var ball;
var score;
var bricksGroup;
var ballimg;
var edges;
function preload(){
    ballimg=loadImage("./images/images/ball.png");
}


function setup(){
    createCanvas(600,600);

    bar=createSprite(300,500,100,10);
    bar.shapeColor="yellow";

    ball=createSprite(300,475,10,10);
    ball.addImage(ballimg);
    ball.scale=0.07;
    
    bricksGroup=createGroup();
    drawBricks();
    
    score=0;
edges=createEdgeSprites();
}
function draw(){
    background("brown");
    bar.x=mouseX;

    fill ("white");
    textSize(15);
    text("Score = "+score,250,40);

    if (keyDown("space")){
        ball.velocityX=-4;
        ball.velocityY=5;
    }

    ball.bounceOff(bar);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);

    if(ball.y>600){
        ball.destroy();
        text("you lost the game",200,452);
    }
    ball.bounceOff(bricksGroup,brickVanish);

    if(!bricksGroup[0]){
        ball.velocityX=0;
        ball.velocityY=0;
        textSize(25);
        text("you won the game",200,450);
    }

    drawSprites();
}

function drawBricks(){
for(var y=75; y<=300; y+=40){
    var color=rgb(random(0,255),random(0,255),random(0,255));

    for(var x=70; x<=550; x+=90){

        var brick=createSprite(x,y,80,30);
        brick.shapeColor=color;
        bricksGroup.add(brick);
    }
    
}

}


function brickVanish(ball,brick){
    brick.destroy();
    score=score+5;
}
