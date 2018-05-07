var canvasWidth = 600;
var canvasHeight = 600;

var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("myCanvas02");

var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");

canvas.width = canvas2.width = canvasWidth;
canvas.height = canvas2.height = canvasHeight;

var grd=ctx.createLinearGradient(0,0,600,600);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;

var bgimage = new Image();
bgimage.src = "src/background.jpg";

var moon = new Image();
moon.src = "src/moon.png";

var starFImg = new Image();
starFImg.src = "src/star2.png";

var starBImg = new Image();
starBImg.src = "src/star.png";

var lastTime = Date.now();

document.body.onload = init;

var star = null;
var isDown = false;

function init(){

    star = new Star()
    star.init();
    flicker();
}

function flicker(){

    var curTime = Date.now();

    if(curTime - lastTime > 500){
        lastTime = curTime;
        star.draw();
    }

    requestAnimationFrame(flicker);
}

var lastLocX = 0;
var lastLocY = 0;

/*canvas2.onmousemove = function(e){
    var curLocX = e.clientX;
    var curLocY = e.clientY;

    var pos = getBoundRect(curLocX,curLocY);

    if(isDown === true && curLocX - lastLocX > 15 || curLocY - lastLocY > 15 ){

        star.drawStarMove(pos);

        lastLocX = curLocX;
        lastLocY = curLocY;
    }

}*/


canvas2.onmousedown = function(e){

    isDown = true;
    var curLocX = e.clientX;
    var curLocY = e.clientY;

    var pos = getBoundRect(curLocX,curLocY);

    star.drawStarDown(pos);

}

canvas2.onmouseup = function(e){

    isDown = false;

}
// 在画布上的位置
function getBoundRect(clientX,clientY){

    var rect = null;

    rect = canvas.getBoundingClientRect();

    return {
        x:clientX - rect.left,
        y:clientY - rect.top
    }
}