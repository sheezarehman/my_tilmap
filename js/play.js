var playState = {
    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.keyboard= game.input.keyboard;

        this.map = game.add.tilemap('map');
        // backgrounds

        game.add.tileSprite(0, 0, 3200, 570, "sky");
        game.add.tileSprite(0, 0, 3200, 480, "cloud");
        game.add.tileSprite(100, 300, 940, 300, 'midground');
        game.add.tileSprite(2000, 300, 940, 300, 'midground');



        this.ground = game.add.tileSprite(0, 570, 3200, 38, 'ground1');
        game.physics.enable(this.ground ,Phaser.Physics.ARCADE);
        this.ground.enableBody = true;
        this.ground.physicsType = Phaser.SPRITE;
        this.ground.body.immovable = true;


        this.glace = game.add.group();
        this.glace.enableBody = true;
        this.glace.physicsType = Phaser.SPRITE;
        var test = this.glace.create(-50, 550, 'ice3');
        test.body.immovable = true;



        this.layer = this.map.createLayer('Calque de Tile 1');
        this.layer.resizeWorld();


        // this.cloud = game.add.sprite

        this.player = game.add.sprite(30, game.world.height - 150,'player');
        game.physics.enable(this.player ,Phaser.Physics.ARCADE);
        this.player.body.gravity.y = 750;
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left', [6,7,8], 8, true);
        this.player.animations.add('right', [12, 13 , 14 ], 8, true);
        this.cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(this.player);

    },
    update: function () {


        /*this.clouds.tilePosition.x-= 0.2;
        this.ground.tilePosition.x-= 0.3;*/

        var hitPlatform = game.physics.arcade.collide(this.player, this.ground);

        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -150;

            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;

            this.player.animations.play('right');
            // console.log(this.player.world);
        } else {
            //  Stand still
            this.player.animations.stop();

            this.player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform) {
            this.player.body.velocity.y = -350;
        }
    }
};