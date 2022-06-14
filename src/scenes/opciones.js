import Button from "../js/button.js";
export class Opciones extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Opciones");
    }
  
    preload() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "opciones")
    .setScale(1);
    }
  
    create() {
      // Pasa directamente a la escena del menú principal
      //this.scene.start("MainMenu");

      //Boton para volver al menu principal
      const botonVolverMenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 260, 'Volver al Menu', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("MainMenu");
        });

    }
    
}