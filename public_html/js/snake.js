var snake;

var context;
var screenwith;
var screenheight;




function gameinitialize() {
   var canvas = document .getelementbyid("game-sreen"); 
   context = canvas.getcontext("2d");
   
   screenwith = window.innerWidth;
   screenheight = window.innerHeight;
   
   canvas.width = screenwidth;
   canvas.height= screenheight;
}

function gameloop() {
    
}

function gamedrow (){
    context.fillStyle="rgb(180,250,213)";
    context.fillRect(0,0 , screenheight, screenheight);
    
    
}

function snakeinitialize() {
    snake = [];
    snakelength = 5;
    snakesize = 20;
  
    for(var index = 0; index < snakelength; index++) {
        
    }
} 

function snakedraw() {
     
}

function  snakeupdate() {
    
}