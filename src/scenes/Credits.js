import Button from "../js/button.js";
export class Credits extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Credits");
    }
  
    preload() {
      this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );
    }
  
    create() {
      // Pasa directamente a la escena del menú principal
      //this.scene.start("MainMenu");

      //Boton para volver al menu principal
      const botonVolverMenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/5, 'Volver al Menu', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("MainMenu");
        });

    }
    
}