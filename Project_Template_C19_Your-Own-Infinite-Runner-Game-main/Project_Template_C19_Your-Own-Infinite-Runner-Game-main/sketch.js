var fundo,fundoImg;
var pacman,pacmanAni,pacmanmorto;
var PLAY,END;
var fantasma1,fantasma2,fantasma3,fantasma4;



function preload(){

fundoImg=loadImage("fundo.png");
pacmanAni=loadAnimation("animação.png","animação2.png","animação.png","animação2.png");
fantasma1=loadImage("fantasma1.png");
fantasma2=loadImage("fantasma2.png");
fantasma3=loadImage("fantasma3.png");
fantasma4=loadImage("fantasma4.png");
}

function setup() {
 createCanvas(600,300);

 pacman=createSprite(100,150);
 pacman.addAnimation("correndo", pacmanAni);
 pacman.scale=0.1;

 fundo=createSprite(300,150);
 fundo.addImage("fundo",fundoImg);
 fundo.scale=0.5;
 fundo.velocityX=-4;
 fundo.x=fundo.width/4;
}

function draw() {
    background(180);
 
 
 if (fundo.x<0){
 fundo.x=fundo.width/4;

 }

 if(keyDown(UP_ARROW)){
 pacman.y-=3


 }
 if(keyDown(DOWN_ARROW)){
    pacman.y+=3
   
   
    }



 fundo.depth = pacman.depth;
 pacman.depth = pacman.depth + 1;


    drawSprites();


}


function obstaculos(){

    if(frameCount % 80 === 0){

        var fantasma = createSprite(600,150);
         fantasma.y= Math.round(random(50,250));
         fantasma.velocityX =-3
         var aleatorio = Math.round(random(1,4));
         switch(aleatorio) {
           case 1: fantasma.addImage(fantasma1);
                   break;
           case 2: fantasma.addImage(fantasma2);
                   break;
           case 3: fantasma.addImage(fantasma3);
                   break;
           case 4: fantasma.addImage(fantasma4);
                   break;
           default: break;
         }



    }

    fundo.depth =fantasma.depth;
    fantasma.depth = fantasma.depth + 1;
   


}
