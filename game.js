function preload() {
  this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_3.png');
  this.load.image('bugPellet', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugPellet.png');
  this.load.image('tower1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
  this.load.image('tower2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
  this.load.image('tower3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_3.png');
  this.load.image('tower4', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
  this.load.image('tower5', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
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
            for (var i = 0; i < 8; i++)
             {
            var follower = this.add.follower(path, config.width / 16, config.height * 1.1, 'bug1');

            follower.startFollow({
                duration: 8000,
                positionOnPath: true,
                repeat: 0,
                ease: 'Linear',
                delay: i * 700
            });
             }
        //add grid
        var group = this.add.group({
            key: 'bug2',
            frameQuantity: 15
        });
        Phaser.Actions.GridAlign(group.getChildren(), {
            width: 5,
            height: 3,
            cellWidth: 40,
            cellHeight: 40,
            x: config.width/3,
            y:config.height * .66
        });
        // add towers
        gameState.towers = this.physics.add.group();
        for (xVal = 1; xVal < 6; xVal++) {
            gameState.towers.create((config.width/5) + (xVal*40), config.height*.9, 'tower1');
        }
        gameState.towers.inputEnabled = true;
        gameState.towers.input.enableDrag();
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
			gravity: { y: 0 },
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
