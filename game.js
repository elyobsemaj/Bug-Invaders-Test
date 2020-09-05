function preload() {
  this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_3.png');
  this.load.image('bugPellet', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugPellet.png');
}


const gameState = {};

function create() {
    	// add a path
	    var graphics = this.add.graphics(); 
	    path = this.add.path(config.width / 16, config.height * 1.1);
	    path.lineTo(config.width / 16, config.height * .55);
	    path.lineTo(config.width * 1.1, config.height * .55);
    
	    graphics.lineStyle(3, 0xffffff, 1);
	    // visualize the path
	    path.draw(graphics);
	
	    // add enemies
    	var enemy1 = this.add.follower(path, config.width / 16, config.height * 1.1, 'bug1');
    	enemy1.startFollow(8000);
}

function update() {
}

const config = {
	type: Phaser.AUTO,
	width: 365,
	height: 667,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scene: {
		preload,
		create,
		update
	}
};


const game = new Phaser.Game(config);
