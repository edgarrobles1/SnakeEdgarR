/* ---------------------------------------------------------------------------
 * Variables
 * ---------------------------------------------------------------------------
 */

var snake;
var snakelength;
var snakesize;

var food;

var context;
var screenwidth;
var screenheight;
var snakeDirection;

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
   
   screenWidth = window.innerWidth;
   screenHeight = window.innerHeight;
   
   canvas.width = screenWidth;
   canvas.height= screenHeight;
}

function gameLoop() {
    console.log("gameloop");
     gamedraw();
     snakeupdate();
     snakedraw();
     fooddraw();
}

function gamedraw (){
    console.log("gamedraw");
    context.fillStyle= "red";
    context.fillRect(0,0 , screenWidth, screenHeight);
}
/* ---------------------------------------------------------------------------
 * snake functions
 * ---------------------------------------------------------------------------
 */

function snakeinitialize() {
    snake = [];
    snakelength = 5;
    snakesize = 20;
    snakeDirection = "right";
  
    for(var index = 0; index < snakelength; index++) {
        snake.push({
            x:index,
            y: 0
        });
        
    }
}
 
function snakedraw() {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakesize, snake[index].y * snakesize, snakesize, snakesize);
    }
}

function  snakeupdate() {
    var snakeheadx = snake[0].x;
    var snakeheady = snake[0].y;
    
   snakeheady++;
 
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
     
     
 }
 
     function setfoodposition(){
     var randomx = Math.floor(Math.random(mix. min) * screenwidth);
     var randomy = Math.floor(Math.random() * screenheight);
     
     food.x = randomx;
     food.y = randomy; 
     
 }
 