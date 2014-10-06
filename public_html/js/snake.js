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
    context.fillstyle="rgb(180,250,213)";
    context.fillrect(0,0 , screenheight, screenheight);
}