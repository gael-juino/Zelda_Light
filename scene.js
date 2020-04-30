var config = {
	type: Phaser.AUTO,
	width: 3600,
	height: 1800,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 00},
			debug: true

		}
	},

	scene: [Scene1, Scene2, Scene3, Scene12]

};

var game = new Phaser.Game(config);