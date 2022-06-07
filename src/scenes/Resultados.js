import Button from "../js/button.js";
export class Resultados extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Resultados");
    }
  
    
    /*preload() {
      this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );
    }*/
    
    create() {
       //Boton para volver al menu principal
      const botonMenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/5, 'Volver al Menu', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("MainMenu");
    });

    //Boton para revancha
    const botonRestart = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Revancha', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("PlayCombat");
    });
    }
}