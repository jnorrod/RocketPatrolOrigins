class Menu extends Phaser.Scene {

    constructor(){
        super("menuScene")
    }

    create() {
        this.add.text(300, 240, "Rocket Patrol Menu").setOrigin(0.5, 0.5);
        this.scene.start("playScene");
    }
}