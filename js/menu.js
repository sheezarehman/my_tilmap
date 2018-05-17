var menuState = {
    create: function () {

        var levelLabel = game.add.text(80, 150 , "Level 1!",{font:"30px Courier",fill:"#ffffff"});
        var startLabel = game.add.text(80, 300 , "press the 's' to start!",{font:"30px Courier",fill:"#ffffff"});

        var skey = game.input.keyboard.addKey(Phaser.Keyboard.S);

        skey.onDown.addOnce(this.start , this);
    },

    start: function () {
        game.state.start("play");
    }
};