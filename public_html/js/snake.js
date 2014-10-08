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
    context.fillStyle= "rgb(180,250,213)";
    context.fillRect(0,0 , screenheight, screenheight);
    
    
}

function snakeinitialize() {
    snake = [];
    snakelength = 5;
    snakesize = 20;
  
    for(var index = 0; index < snakelength; index++) {
        snake.push({
            x:index,
            y: 0
        });
        
    }
} 

function snakedraw() {
    for(var index = 0; index  < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakesize, snake[index].y * snakeside, snakeside, snakeside);
    }
}

function  snakeupdate() {
    
}