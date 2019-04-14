class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneMain'});
    }
    
    create() {
        this.points = [];
        this.stars = this.add.group();
        this.maxDepth = 32;
    }
    
    update() {
        
    }
}