//import Button from "../js/button.js";
export class VictoriaS extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("VictoriaS");
    }
  
    preload() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "victoriaS")
    .setScale(1.138);
    }
  
    create() {
      // Pasa directamente a la escena del menú principal
      //this.scene.start("MainMenu");

      //volver al menu
        
      let volverM = this.add.text(950, 620, 'VOLVER AL MENU')
        .setStyle({
            fontFamily: "asian",
            fontSize: '40px',
            //fill: '#7D8E69',
            fontColor: '#F5E7E7'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
          this.scene.start("MainMenu")
        })
        .on('pointerover', () => volverM.setTint(0x637F9E))
        .on('pointerout', () => volverM.setTint(0xDBE5D0));

        

      //Boton para volver al menu principal
      /*const botonVolverMenu = new Button(this.cameras.main.centerX, this.cameras.main.centerY + 260, 'Volver al Menu', this, () => {
        // Instrucción para pasar a la escena PlayCombat
        this.scene.start("MainMenu");
        });*/

    }
    
}