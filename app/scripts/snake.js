var clearCanvas = function(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var draw = function(ctx, increment){
  ctx.beginPath();
  ctx.moveTo(75 + increment,25);
  ctx.lineWidth = 8;
  ctx.lineTo(275 + increment, 25);
  ctx.stroke();
};

$(document).ready(function(){
  var canvas = document.getElementById("snake-game");
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  var ctx = canvas.getContext('2d');

  var i = 0;
  setInterval(function(){
    clearCanvas(ctx, canvas);
    draw(ctx, i);
    i++;
  },100);
});