import Button from "../js/button.js";
export class SelecPer extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("SelecPer");
    }
  
    
    /*preload() {
      this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
      this.load.image(
        "mainmenu_bg",
        "public/assets/images/main_menu_background.png"
      );
    }*/
    
    create() {
       //Boton para comenzar a jugar al combate
      const botonPlayC = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2, 'Empezar', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("PlayCombat");
    });
    }
}