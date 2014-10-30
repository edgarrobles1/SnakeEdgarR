/* ---------------------------------------------------------------------------
 * Variables
 * 
 */

var snake;
var snakelength;
var snakesize;

var food;

var context;
var screenwidth;
var screenheight;

/* ---------------------------------------------------------------------------
 * executing game code
 *  --------------------------------------------------------------------------
 */

gameinitialize();
snakeinitialize();
foodinitialize();
setInterval(gameLoop, 1000/30);

/*---------------------------------------------------------------------------
 * game functions
 * --------------------------------------------------------------------------
 */

function gameinitialize() {
   var canvas = document.getElementById("game-screen"); 
   context = canvas.getContext("2d");
   
   screenwidth = window.innerWidth;
   screenheight = window.innerHeight;
   
   canvas.width = screenwidth;
   canvas.height= screenheight;
}

function gameLoop() {
     gamedraw();
     snakeupdate();
     snakedraw();
     fooddraw();
}

function gamedraw (){
    context.fillStyle= "red";
    context.fillRect(0,0 , screenwidth, screenheight);
}
/* ---------------------------------------------------------------------------
 * snake functions
 * ---------------------------------------------------------------------------
 */

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
/* ---------------------------------------------------------------------------
 * food functions
 * ---------------------------------------------------------------------------
 */

function foodinitialize() {
    food = {
       x: 0,
       y: 0
    };
}

 function fooddraw () {
     context.fillStyle = "white";
     context.fillRect(food.x, food.y, snakesize, snakesize);
     
     food.x = randomX;
     food.y = randomY;
 }
 