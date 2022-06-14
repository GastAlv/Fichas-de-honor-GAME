import Button from "../js/button.js";
export class PlayZoom extends Phaser.Scene {
    constructor(){
        super("PlayZoom")
    }

    preload(){}
    create(){

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "combatZoom")
        .setScale(.6)

        //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Seguir', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("Resultados");
    });
    }
    update(){}
}