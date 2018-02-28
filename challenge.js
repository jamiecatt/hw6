var x = 0;
var y = 0;
var targetx = 5;
var targety = 5;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	var rate = 0.25;

	x = targetx * rate + x * (1 - rate);
	y = targety * rate + y * (1 - rate);

	rect(x, y, 5, 20);
  fill(255);
  noStroke();
}

function mouseMoved() {
	targetx = mouseX;
	targety = mouseY;
}
