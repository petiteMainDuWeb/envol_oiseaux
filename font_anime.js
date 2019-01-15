window.addEventListener("load", function () {
	var ctx = document.querySelector("canvas").getContext("2d");
	var brushWidth = 200;
	var brushOffset = brushWidth;
	var speed = 7;
	var txt = "Webdesign n°89: tutos";
	var x = 0, i = 0;
	ctx.font = "2cm Sofia";
	ctx.lineWidth = 3;
	ctx.fillStyle = "#000";

	(function draw(){
		ctx.clearRect(x, 0, 800, 150);
		ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);
		brushOffset -= speed;
		ctx.strokeText(txt[i], x, 70);
		if (brushOffset > 0)requestAnimationFrame(draw);
		else{
			brushOffset = brushWidth;
			x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
			if (i < txt.length)requestAnimationFrame(draw);
		}
	})()
})