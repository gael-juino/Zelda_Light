class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene_3");
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
	this.door2;
	this.maFonction;

	}

	preload(){
	this.load.image('background5','assets/background5.png');
	this.load.image('platform','assets/platforms.jpeg');
	this.load.spritesheet('perso', 'assets/Vaisseau.png',{frameWidth: 27.6, frameHeight:20});
	this.load.image('toit', 'assets/toit.png');
	
	}

	create() {

	   this.add.image(200,200,'background5');

	   this.platforms = this.physics.add.staticGroup();

	   this.platforms.create(52,50, 'platforms').setScale(2.1,4).refreshBody();
	   this.platforms.create(115,10, 'platforms').setScale(1.5,0.7).refreshBody();
	   this.platforms.create(15,322, 'platforms').setScale(1.1,2.5).refreshBody();
	   this.platforms.create(45,318, 'platforms').setScale(0.6,0.7).refreshBody();
	   this.platforms.create(290,82, 'platforms').setScale(1.5,3.26).refreshBody();
	   this.platforms.create(387,78, 'platforms').setScale(1,2.2).refreshBody();
	   this.platforms.create(371,392, 'platforms').setScale(1.8,0.7).refreshBody();
	   
	   	this.door2 = this.physics.add.sprite(200,390, 'platforms');
		//this.platforms.setVisible(false);


		this.cursors = this.input.keyboard.createCursorKeys();
	   	

	   // Perso 

			this.player = this.physics.add.sprite(200,300,'perso');
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

            this.physics.add.overlap (this.player, this.door2, maFonction, null, this);


            function maFonction(){
                this.scene.start('Scene_12');
                console.log("Transition");
            }
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
	}

}