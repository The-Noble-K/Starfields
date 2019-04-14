let config = {
    type: Phaser.WEBGL,
    width:640,
    height: 640,
    backgroundColor: 'purple',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: {
        SceneMain
    },
    pixelArt: true,
    roundPixels: false
};
let game = new Phaser.Game(config);