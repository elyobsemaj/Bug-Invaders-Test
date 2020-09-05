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
	    path = this.add.path(40, 550);
	    path.lineTo(40, 256);
	    path.lineTo(700, 256);
    
	    graphics.lineStyle(3, 0xffffff, 1);
	    // visualize the path
	    path.draw(graphics);
	
	// add enemies
	gameState.enemies = this.physics.add.group();
        for (yVal = 1; yVal < 4; yVal++) {
                gameState.enemies.create(50 , 50 * yVal, 'bug1').setScale(0.6).setGravityY(-200);
        }
	var enemy1 = this.add.follower(path, 40, 550, 'bug1');
    	enemy1.startFollow(8000);
}

function update() {
}

const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 512,
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
