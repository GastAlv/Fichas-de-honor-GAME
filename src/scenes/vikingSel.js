import Button from "../js/button.js";
export class selecViking extends Phaser.Scene {
    constructor(){
        super("selecViking")
    }

    preload(){}
    create(){

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "vikingSelec")
        .setScale(0.32);

        //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 260, 'Listo', this, () => {
            // Instrucción para pasar a la escena PlayCombat
            this.scene.start("PlayCombat");
        });
    }
    update(){}
}