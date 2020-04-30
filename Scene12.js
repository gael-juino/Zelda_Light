class Scene12 extends Phaser.Scene {
    constructor() {
        super("Scene_12");
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
	this.maFonction;

	}

	preload(){
	this.load.image('background1','assets/background1.png');
	this.load.image('platform','assets/platforms.jpeg');
	this.load.spritesheet('perso', 'assets/Vaisseau.png',{frameWidth: 27.6, frameHeight:20});
	this.load.image('toit', 'assets/toit.png');
	
	}

	create() {

	   this.add.image(1800,900,'background');

	   //MAISON//
	   this.add.image(200,840,'toit');

	   //MUR//
		this.platforms = this.physics.add.staticGroup();

		this.platforms.create(225,568, 'platforms').setScale(10).refreshBody();
		this.platforms.create(105,65, 'platforms').setScale(5).refreshBody();
		this.platforms.create(550,488, 'platforms').setScale(15).refreshBody();
		this.platforms.create(910,613, 'platforms').setScale(7).refreshBody();
		this.platforms.create(492,380, 'platforms').setScale(19).refreshBody();
		this.platforms.create(-150,480, 'platforms').setScale(15).refreshBody();

		this.platforms.create(755,1170, 'platforms').setScale(4.8).refreshBody();
		this.platforms.create(475,1260, 'platforms').setScale(3).refreshBody();
		this.platforms.create(410,1260, 'platforms').setScale(3).refreshBody();
		this.platforms.create(600,1235, 'platforms').setScale(5).refreshBody();
		this.platforms.create(650,1235, 'platforms').setScale(5).refreshBody();
		this.platforms.create(855,1230, 'platforms').setScale(8.3).refreshBody();
		this.platforms.create(1005,1178, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1100,1270, 'platforms').setScale(8).refreshBody();
		this.platforms.create(1325,1270, 'platforms').setScale(8).refreshBody();
		this.platforms.create(1503,1340, 'platforms').setScale(9).refreshBody();
		this.platforms.create(1488,1340, 'platforms').setScale(9).refreshBody();
		this.platforms.create(1700,1275, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1700,1360, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1764,1360, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1915,1312, 'platforms').setScale(5.45).refreshBody();
		this.platforms.create(1750,1305, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1525,1270, 'platforms').setScale(5.5).refreshBody();
		this.platforms.create(1175,1203, 'platforms').setScale(5).refreshBody();
		this.platforms.create(1075,1145, 'platforms').setScale(4.2).refreshBody();
		this.platforms.create(1940,1332, 'platforms').setScale(5).refreshBody();


		this.platforms.create(268,1275, 'platforms').setScale(2.7).refreshBody();
		this.platforms.create(180,1275, 'platforms').setScale(2.7).refreshBody();
		this.platforms.create(92,1275, 'platforms').setScale(2.7).refreshBody();
		this.platforms.create(290,1225, 'platforms').setScale(1.3).refreshBody();
		this.platforms.create(-42,1365, 'platforms').setScale(8).refreshBody();
		this.platforms.create(130,1567, 'platforms').setScale(5).refreshBody();
		this.platforms.create(310,1746, 'platforms').setScale(7).refreshBody();

		this.platforms.create(1378,2545, 'platforms').setScale(50.5).refreshBody();

		this.platforms.create(2577,1767, 'platforms').setScale(4).refreshBody();
		this.platforms.create(2688,1667, 'platforms').setScale(4).refreshBody();
		this.platforms.create(2810,1567, 'platforms').setScale(4).refreshBody();
		this.platforms.create(2915,1460, 'platforms').setScale(4).refreshBody();
		this.platforms.create(3045,1460, 'platforms').setScale(4).refreshBody();
		this.platforms.create(3230,1330, 'platforms').setScale(8).refreshBody();
		this.platforms.create(3325,1210, 'platforms').setScale(8).refreshBody();
		this.platforms.create(3525,1210, 'platforms').setScale(8).refreshBody();
		this.platforms.create(3525,805, 'platforms').setScale(6).refreshBody();
		this.platforms.create(3445,805, 'platforms').setScale(6).refreshBody();
		this.platforms.create(3528,610, 'platforms').setScale(6).refreshBody();
		this.platforms.create(3528,410, 'platforms').setScale(6).refreshBody();
		this.platforms.create(2065,340, 'platforms').setScale(25).refreshBody();
		this.platforms.create(2812,500, 'platforms').setScale(25).refreshBody();
		this.platforms.create(3002,500, 'platforms').setScale(25).refreshBody();
		this.platforms.create(1930,165, 'platforms').setScale(25).refreshBody();
		this.platforms.create(1465,0, 'platforms').setScale(5).refreshBody();

		//maison//
		this.platforms.create(200,825, 'platforms').setScale(9).refreshBody();
		
		//changement de scene//
		this.changeS = this.physics.add.staticGroup();

			//scene//
				//droite//
				this.door = this.physics.add.sprite(3600,1000,'platforms');

				//maison//
				this.door1 = this.physics.add.sprite(193,980, 'platforms');

				//haut//
				this.changeS.create(800,2, 'platforms').setScale(40,1).refreshBody();




		this.platforms.setVisible(false);


		this.cursors = this.input.keyboard.createCursorKeys();
	   	

	   // Perso 

			this.player = this.physics.add.sprite(196,1100,'perso');
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
                this.scene.start('Scene_2');
                console.log("Transition");
            }

            this.physics.add.overlap (this.player, this.door1, maison, null, this);


            function maison(){
                this.scene.start('Scene_3');
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