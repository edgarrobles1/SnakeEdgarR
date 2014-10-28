var snake;
var snakelength;
var snakesize;

var food;

var context;
var screenwidth;
var screenheight;

gameinitialize();
snakeinitialize();
setInterval(gameloop, 1000/30);

function gameinitialize() {
   var canvas = document.getElementById("game-screen"); 
   context = canvas.getContext("2d");
   
   screenwidth = window.innerWidth;
   screenheight = window.innerHeight;
   
   canvas.width = screenwidth;
   canvas.height= screenheight;
}

function gameloop() {
     gamedraw();
     //snakeupdate();
     snakedraw();
}

function gamedraw (){
    context.fillStyle= "rgb(180,250,213)";
    context.fillRect(0,0 , screenwidth, screenheight);
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
        context.fillRect(snake[index].x * snakesize, snake[index].y * snakesize, snakesize, snakesize);
    }
}

function  snakeupdate() {
    var snakeheadx = snake[0].x;
    var snakeheady = snake[0].y;
 
   snakeheadx++;
 
   var snaketail = snake.pop();
   snaketail.x = snakeheadx;
   snaketail.y = snakeheady;
   snake.unshift(snaketail);
}

function foodinitialize() {
    food = {
       x: 0,
       Y: 0
    };
}

 function fooddraw () {
     context.fillStyle = "white";
     context.fillRect(food.x, food.y, snakesize);
 }