var snake;
var snakelength;
var snakesize;

var food;

var context;
var screenwith;
var screenheight;

gameinitialize();
snakeinitialize();
setinterval(gameloop, 1000/30);

function gameinitialize() {
   var canvas = document .getelementbyid("game-sreen"); 
   context = canvas.getcontext("2d");
   
   screenwith = window.innerWidth;
   screenheight = window.innerHeight;
   
   canvas.width = screenwidth;
   canvas.height= screenheight;
}

function gameloop() {
     gamedraw();
     snakeupdate();
     snakedraw();
}

function gamedraw (){
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
    var snakeheadx = snake[0].x;
    var snakeheady = snake[0].y;
 
   snakeheadx++;
 
   var snaktail = snake.pop();
   snaktail.x = snkeheadx;
   snaketail.y = snkeheady;
   snake.unshift(snaketail);
}

function foodinitialize() {
    food = {
       x: 0,
       Y: 0
    };

 function fooddraw () {
     context.fillStyle = "white";
     context.fillRect(food.x, food.y, snakesize);
 } 