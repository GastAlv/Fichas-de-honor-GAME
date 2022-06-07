import Button from "../js/button.js";
export class PlayCombat extends Phaser.Scene {
    constructor(){
        super("PlayCombat")
    }

    preload(){}
    create(){
        //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Seguir', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("Resultados");
    });
    }
    update(){}
}