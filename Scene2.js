class Scene2 extends Phaser.Scene {
    constructor() {
        super("Scene_2");
    }
    init(){
    this.platforms;
	this.player;
	this.cursors; 
	this.intro;
	this.keyObj;
	this.timedEvent;
	this.keys;
	this.changeS;
	this.door;
	this.door1;
	this.maFonction;
	this.potionSpeed;

	this.data.scoreText=scoreText


	}

	preload(){
	this.load.image('background2','assets/background2.png');
	this.load.image('platform','assets/platforms.jpeg');
	this.load.spritesheet('perso', 'assets/Vaisseau.png',{frameWidth: 27.6, frameHeight:20});
	this.load.image('toit', 'assets/toit.png');
	
	}

	create() {

	   this.add.image(1800,900,'background2');


	   //MUR//
		this.platforms = this.physics.add.staticGroup();

	
		this.platforms.create(150,1270, 'platforms').setScale(11).refreshBody();
		this.platforms.create(620,1100, 'platforms').setScale(18,4).refreshBody();
		this.platforms.create(990,1315, 'platforms').setScale(6,11).refreshBody();
		this.platforms.create(1150,1530, 'platforms').setScale(6,10).refreshBody();
		this.platforms.create(1290,1640, 'platforms').setScale(6,8).refreshBody();
		this.platforms.create(1420,1715, 'platforms').setScale(2).refreshBody();
		this.platforms.create(1625,1768, 'platforms').setScale(20,2).refreshBody();
		this.platforms.create(2400,1800, 'platforms').setScale(28,2).refreshBody();
		this.platforms.create(2870,1765, 'platforms').setScale(4,1).refreshBody();
		this.platforms.create(3270,1720, 'platforms').setScale(22,4).refreshBody();
		this.platforms.create(3510,1550, 'platforms').setScale(20,2).refreshBody();
		this.platforms.create(3220,1400, 'platforms').setScale(2,8).refreshBody();
		this.platforms.create(3085,1295, 'platforms').setScale(10,2).refreshBody();
		this.platforms.create(2950,1230, 'platforms').setScale(2,4).refreshBody();
		this.platforms.create(2890,1130, 'platforms').setScale(6,2).refreshBody();
		this.platforms.create(2830,1070, 'platforms').setScale(2,5).refreshBody();
		this.platforms.create(2755,955, 'platforms').setScale(5,2).refreshBody();
		this.platforms.create(2715,860, 'platforms').setScale(2,7).refreshBody();
		this.platforms.create(2830,780, 'platforms').setScale(5,2).refreshBody();
		this.platforms.create(2940,690, 'platforms').setScale(2,6).refreshBody();


		this.platforms.create(195,860, 'platforms').setScale(12,3).refreshBody();
		this.platforms.create(420,760, 'platforms').setScale(12,3).refreshBody();
		this.platforms.create(840,690, 'platforms').setScale(14,3).refreshBody();
		this.platforms.create(1250,630, 'platforms').setScale(12,2).refreshBody();
		this.platforms.create(1560,675, 'platforms').setScale(7,3).refreshBody();
		this.platforms.create(1665,700, 'platforms').setScale(3.6,5).refreshBody();
		this.platforms.create(1900,570, 'platforms').setScale(12,7).refreshBody();
		this.platforms.create(2300,450, 'platforms').setScale(15,2).refreshBody();
		this.platforms.create(2745,510, 'platforms').setScale(14,5).refreshBody();


		//this.platforms.setVisible(false);


		this.cursors = this.input.keyboard.createCursorKeys();
	   	

	   // Perso 

			this.player = this.physics.add.sprite(20,1000,'perso');
			this.player.direction = 'right';
			this.player.setBounce(0.02);
			this.player.setCollideWorldBounds(true);
			this.physics.add.collider(this.player,this.platforms);
			this.physics.add.overlap(this.player,this.changeS);
			this.player.setVisible(false);



		// anims perso

			this.anims.create({
			    key: 'left',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'turn',
			    frames: [ { key: 'perso', frame: 1 } ],
			    frameRate: 20
			});

			this.anims.create({
			    key: 'right',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'up',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'down',
			    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
			    frameRate: 10,
			    repeat: -1
			});

			
			this.physics.add.overlap (this.player, this.door, maFonction, null, this);


            function maFonction(){
                this.scene.start('Scene_3');
                console.log("Transition");
            }

            this.groupeBullets = this.physics.add.group();
			this.fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

			//SCORE//
			this.scoreText = this.add.text(600,16, 'score: 0', {fontSize: '32px', fill:'#000'});

	}



		


	update() {
		// Deplacement vaisseau 

		if (this.cursors.left.isDown){
           this.player.setVelocityX(-800);

           this.player.anims.play('left', true);

           this.player.direction = 'left';
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(800);

            this.player.anims.play('right', true);

            this.player.direction = 'right';
        }
        else{
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown){
               this.player.setVelocityY(-800);
        }

        else if (this.cursors.down.isDown){
                this.player.setVelocityY(800);
                this.player.setFlipX(true);
        }
        else{
                this.player.setVelocityY(0);
        }

        if (this.cursors.down.isDown){
           this.player.setVelocityY(800);

           this.player.anims.play('down', true);

           this.player.direction = 'down';
        }


		var bullet = this.groupeBullets.create(this.player.x + (25 * this.coefDir), this.player.y - 4, 'bullet');

        bullet.body.allowGravity =false;
        bullet.setVelocity(1000 * this.coefDir, 0);

        if (Phaser.Input.Keyboard.JustDown(this.fire)) {

                if (this.player.direction == 'right') {
                    this.coefDir = 1;
                }

                if (this.player.direction == 'left') {
                    this.coefDir = -1;
                }

                if (this.player.direction == 'left') { 
                    this.coefDir = -1; 
                } 
                else { 
                    this.coefDir = 1 
                }
        }

        function collectPiece(player, piece) {
        	piece.disableBody(true,true);
        	score++;
        	scoreText.setText('score: '+score);
        }
 
	}

}