import Button from "../js/button.js";
export class selecSamurai extends Phaser.Scene {
    constructor(){
        super("selecSamurai")
    }

    preload(){}
    create(){

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "samuraisSelec");

        //Boton para seguir a resultados
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 260, 'Listo', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("selecViking");
    });
    }
    update(){}
}