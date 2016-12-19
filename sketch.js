var raindrops = [];
var total = 150;

function setup() {
	createCanvas(1000, 600);
	for (var i = 0; i < total; i++) {
		raindrops[i] = new RainDrop();
	}		
}

function draw() {
	background(255);
	for (var i = 0; i < total; i++) {
		raindrops[i].update();
		raindrops[i].render(); 
	}
}

function RainDrop() {
	this.size = 10;
	this.speed = 10;

	this.init = function() {
		this.x = random(20, width-20);
		this.y = random(-height, -20);
	}

	this.render = function() {
		fill(0);
		noStroke();
		for (var i = 2; i < this.size; i++ ) {
			ellipse(this.x, this.y + i*4, i*2, i*2);	
		}
	}
	
	this.update = function() {
		this.y += this.speed;
		if (this.y + this.size > height) {
			this.init();
		}
	}
	this.init();
}
