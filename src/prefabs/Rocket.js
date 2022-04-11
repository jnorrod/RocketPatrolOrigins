class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this);
        this.firing = false;
        this.moveSpeed = 2;
    }
// left off at 45:32
    update(){
        
        if(this.firing){
            this.y -=10;

        if(this.y<0){
            this.reset();
            }
        }
        if(this.y <= borderUISize * 3 + borderPadding){
            this.reset();
        }

    }
    reset(){
        this.firing = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}